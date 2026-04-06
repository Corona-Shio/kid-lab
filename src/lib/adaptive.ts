import type { TopicMastery, MasteryLevel } from "@/types/progress";
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

/** 10問セッション用の問題を適応アルゴリズムで選択する */
export function selectAdaptiveProblems<T extends Problem>(
  problems: T[],
  masteries: Record<string, TopicMastery>,
  getTopicId: (p: T) => string,
  sessionSize = 10,
): T[] {
  const QUOTA: Record<MasteryLevel, number> = {
    new: 2,
    learning: 4,
    developing: 2,
    mastered: 1,
    review: 1,
  };

  // 各問題の習熟度を確認
  const buckets: Record<MasteryLevel, T[]> = {
    new: [],
    learning: [],
    developing: [],
    mastered: [],
    review: [],
  };

  for (const p of problems) {
    const id = getTopicId(p);
    const mastery = masteries[id] ?? createInitialMastery(id);
    const checked = checkReviewStatus(mastery);
    buckets[checked.level].push(p);
  }

  const selected: T[] = [];

  for (const [level, quota] of Object.entries(QUOTA) as [MasteryLevel, number][]) {
    const pool = shuffle(buckets[level]);
    selected.push(...pool.slice(0, quota));
  }

  // 不足分をランダムで補完
  if (selected.length < sessionSize) {
    const all = shuffle(problems);
    const selectedIds = new Set(selected.map(getTopicId));
    for (const p of all) {
      if (selected.length >= sessionSize) break;
      if (!selectedIds.has(getTopicId(p))) {
        selected.push(p);
      }
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
