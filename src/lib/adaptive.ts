import type { AnswerOutcome, SessionRecord, TopicMastery, MasteryLevel } from "@/types/progress";
import type { Problem } from "@/types/problem";

const REVIEW_THRESHOLD_DAYS = 3;
const INITIAL_REVIEW_INTERVAL = 3;
const REVIEW_INTERVAL_MULTIPLIER = 1.5;

// ========== 習熟度遷移 ==========

export function updateMasteryLevel(
  mastery: TopicMastery,
  isCorrect: boolean,
): TopicMastery {
  const now = Date.now();
  const correct = isCorrect ? mastery.correctCount + 1 : mastery.correctCount;
  const incorrect = isCorrect ? mastery.incorrectCount : mastery.incorrectCount + 1;
  const consecutive = isCorrect ? mastery.consecutiveCorrect + 1 : 0;
  const total = correct + incorrect;
  const rate = total > 0 ? correct / total : 0;

  let level: MasteryLevel = mastery.level;
  let nextReviewAt = mastery.nextReviewAt;
  let reviewIntervalDays = mastery.reviewIntervalDays;

  if (mastery.level === "new") {
    level = "learning";
  } else if (mastery.level === "learning" && rate > 0.6) {
    level = "developing";
  } else if (mastery.level === "developing" && rate >= 0.8 && consecutive >= 3) {
    level = "mastered";
    reviewIntervalDays = INITIAL_REVIEW_INTERVAL;
    nextReviewAt = now + reviewIntervalDays * 24 * 60 * 60 * 1000;
  } else if (mastery.level === "review") {
    if (isCorrect) {
      level = "mastered";
      reviewIntervalDays = mastery.reviewIntervalDays * REVIEW_INTERVAL_MULTIPLIER;
      nextReviewAt = now + reviewIntervalDays * 24 * 60 * 60 * 1000;
    }
  }

  return {
    ...mastery,
    correctCount: correct,
    incorrectCount: incorrect,
    consecutiveCorrect: consecutive,
    level,
    lastAnsweredAt: now,
    nextReviewAt,
    reviewIntervalDays,
  };
}

export function checkReviewStatus(mastery: TopicMastery): TopicMastery {
  if (mastery.level !== "mastered") return mastery;
  const now = Date.now();
  const thresholdMs = REVIEW_THRESHOLD_DAYS * 24 * 60 * 60 * 1000;
  if (now - mastery.lastAnsweredAt >= thresholdMs) {
    return { ...mastery, level: "review" };
  }
  return mastery;
}

export function createInitialMastery(topicId: string): TopicMastery {
  return {
    topicId,
    correctCount: 0,
    incorrectCount: 0,
    consecutiveCorrect: 0,
    level: "new",
    lastAnsweredAt: 0,
    reviewIntervalDays: INITIAL_REVIEW_INTERVAL,
  };
}

// ========== 問題選択 ==========

const DEFAULT_MIX = {
  unseen: 4,
  weak: 3,
  strong: 3,
} as const;

interface SelectionMix {
  unseen: number;
  weak: number;
  strong: number;
}

interface AdaptiveSelectionOptions<T extends Problem> {
  sessions?: SessionRecord[];
  getProblemKey?: (p: T) => string;
  mix?: SelectionMix;
}

interface FirstAttemptStats {
  attempts: number;
  correct: number;
}

function getRate(stats: FirstAttemptStats | undefined): number {
  if (!stats || stats.attempts === 0) return 0;
  return stats.correct / stats.attempts;
}

function getFirstAttempt(result: {
  firstAttempt?: AnswerOutcome;
  finalAttempt?: AnswerOutcome;
}): AnswerOutcome {
  if (result.firstAttempt === "correct" || result.firstAttempt === "incorrect") {
    return result.firstAttempt;
  }
  if (result.finalAttempt === "correct") return "correct";
  return "incorrect";
}

function collectFirstAttemptStats(sessions: SessionRecord[]) {
  const topicStats = new Map<string, FirstAttemptStats>();
  const problemStats = new Map<string, FirstAttemptStats>();

  for (const session of sessions) {
    for (const result of session.problemResults) {
      const firstAttempt = getFirstAttempt(result);
      const problemKey = result.problemKey ?? result.problemId;

      const existingTopic = topicStats.get(result.topicId) ?? { attempts: 0, correct: 0 };
      existingTopic.attempts += 1;
      if (firstAttempt === "correct") existingTopic.correct += 1;
      topicStats.set(result.topicId, existingTopic);

      const existingProblem = problemStats.get(problemKey) ?? { attempts: 0, correct: 0 };
      existingProblem.attempts += 1;
      if (firstAttempt === "correct") existingProblem.correct += 1;
      problemStats.set(problemKey, existingProblem);
    }
  }

  return { topicStats, problemStats };
}

function isWeakTopic(topicStats: FirstAttemptStats | undefined, mastery: TopicMastery | undefined): boolean {
  if (mastery?.level === "review") return true;
  if (!topicStats) return false;
  return getRate(topicStats) < 0.7;
}

function isWeakProblem(problemStats: FirstAttemptStats | undefined): boolean {
  if (!problemStats) return false;
  return getRate(problemStats) < 0.75;
}

function takeUnique<T extends Problem>(
  selected: T[],
  candidatePool: T[],
  targetCount: number,
  getProblemKey: (p: T) => string,
  selectedKeys: Set<string>,
): void {
  if (targetCount <= 0) return;
  for (const problem of shuffle(candidatePool)) {
    if (selected.length >= targetCount) break;
    const key = getProblemKey(problem);
    if (selectedKeys.has(key)) continue;
    selectedKeys.add(key);
    selected.push(problem);
  }
}

/** 10問セッション用の問題を適応アルゴリズムで選択する */
export function selectAdaptiveProblems<T extends Problem>(
  problems: T[],
  masteries: Record<string, TopicMastery>,
  getTopicId: (p: T) => string,
  sessionSize = 10,
  options?: AdaptiveSelectionOptions<T>,
): T[] {
  const mix = options?.mix ?? DEFAULT_MIX;
  const getProblemKey = options?.getProblemKey ?? ((p: T) => p.id);
  const { topicStats, problemStats } = collectFirstAttemptStats(options?.sessions ?? []);

  const unseen: T[] = [];
  const weak: T[] = [];
  const strong: T[] = [];

  for (const problem of problems) {
    const topicId = getTopicId(problem);
    const problemKey = getProblemKey(problem);
    const topicAttemptStats = topicStats.get(topicId);
    const problemAttemptStats = problemStats.get(problemKey);
    const mastery = masteries[topicId];
    const checkedMastery = mastery ? checkReviewStatus(mastery) : undefined;

    if (!topicAttemptStats || !problemAttemptStats) {
      unseen.push(problem);
      continue;
    }

    const weakByTopic = isWeakTopic(topicAttemptStats, checkedMastery);
    const weakByProblem = isWeakProblem(problemAttemptStats);
    const weakByMastery =
      checkedMastery?.level === "learning" ||
      checkedMastery?.level === "review";

    if (weakByTopic || weakByProblem || weakByMastery) {
      weak.push(problem);
    } else {
      strong.push(problem);
    }
  }

  const selected: T[] = [];
  const selectedKeys = new Set<string>();

  takeUnique(selected, unseen, Math.min(sessionSize, mix.unseen), getProblemKey, selectedKeys);
  takeUnique(selected, weak, Math.min(sessionSize, selected.length + mix.weak), getProblemKey, selectedKeys);
  takeUnique(selected, strong, Math.min(sessionSize, selected.length + mix.strong), getProblemKey, selectedKeys);

  // 優先枠が不足した場合は残り候補を混ぜて補完
  const remainingCandidates = [...unseen, ...weak, ...strong];
  takeUnique(selected, remainingCandidates, sessionSize, getProblemKey, selectedKeys);

  // 不足分をランダムで補完
  if (selected.length < sessionSize) {
    const all = shuffle(problems);
    for (const p of all) {
      if (selected.length >= sessionSize) break;
      const key = getProblemKey(p);
      if (selectedKeys.has(key)) continue;
      selectedKeys.add(key);
      selected.push(p);
    }
  }

  return shuffle(selected).slice(0, sessionSize);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
