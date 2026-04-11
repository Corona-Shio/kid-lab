"use client";

import { calcStars } from "@/lib/scoring";
import type { Grade } from "@/types/problem";
import type {
  BadgeInfo,
  SessionProblemResult,
  SessionRecord,
  TopicMastery,
  UserProgress,
  WeakProblemSnapshot,
  WeakTopicRecord,
} from "@/types/progress";

const STORAGE_KEY = "kid-lab:progress";
const MAX_SESSIONS = 100;
const MAX_WEAK_SNAPSHOTS = 5;

function getDefaultProgress(grade: Grade): UserProgress {
  return {
    grade,
    masteries: {},
    weakTopics: {},
    sessions: [],
    badges: [],
    totalStars: 0,
    updatedAt: Date.now(),
  };
}

function computeTotalStars(sessions: SessionRecord[]): number {
  return sessions.reduce((sum, session) => sum + calcStars(session.correctCount, session.totalProblems), 0);
}

function normalizeProblemResults(problemResults: SessionRecord["problemResults"] | undefined): SessionProblemResult[] {
  if (!Array.isArray(problemResults)) return [];
  return problemResults.map((result) => ({
    ...result,
    problemKey: result.problemKey ?? result.problemId,
  }));
}

function normalizeSessions(sessions: SessionRecord[] | undefined): SessionRecord[] {
  if (!Array.isArray(sessions)) return [];
  return sessions.slice(-MAX_SESSIONS).map((session) => ({
    ...session,
    problemResults: normalizeProblemResults(session.problemResults),
  }));
}

function normalizeWeakTopics(
  weakTopics: UserProgress["weakTopics"] | undefined,
): UserProgress["weakTopics"] {
  if (!weakTopics || typeof weakTopics !== "object") return {};

  return Object.fromEntries(
    Object.entries(weakTopics).map(([topicId, value]) => {
      const record = value as WeakTopicRecord;
      const recentProblemSnapshots = Array.isArray(record.recentProblemSnapshots)
        ? record.recentProblemSnapshots.slice(0, MAX_WEAK_SNAPSHOTS)
        : [];

      return [
        topicId,
        {
          topicId,
          incorrectFirstAttempts: record.incorrectFirstAttempts ?? 0,
          sessionCount: record.sessionCount ?? 0,
          lastIncorrectAt: record.lastIncorrectAt,
          lastCorrectAt: record.lastCorrectAt,
          recentProblemSnapshots,
        } satisfies WeakTopicRecord,
      ];
    }),
  );
}

function normalizeProgress(progress: UserProgress | undefined, grade: Grade): UserProgress {
  if (!progress) return getDefaultProgress(grade);

  const sessions = normalizeSessions(progress.sessions);

  return {
    grade,
    masteries: progress.masteries ?? {},
    weakTopics: normalizeWeakTopics(progress.weakTopics),
    sessions,
    badges: Array.isArray(progress.badges) ? progress.badges : [],
    totalStars: computeTotalStars(sessions),
    updatedAt: progress.updatedAt ?? Date.now(),
  };
}

function buildWeakSnapshot(
  session: SessionRecord,
  result: SessionProblemResult,
): WeakProblemSnapshot {
  return {
    sessionId: session.id,
    problemId: result.problemId,
    promptSummary: result.promptSummary,
    firstAttempt: result.firstAttempt,
    finalAttempt: result.finalAttempt,
    completedAt: session.completedAt,
  };
}

function updateWeakTopics(
  weakTopics: UserProgress["weakTopics"],
  session: SessionRecord,
): UserProgress["weakTopics"] {
  const next = { ...weakTopics };
  const topicsCountedInSession = new Set<string>();

  for (const result of session.problemResults) {
    const existing = next[result.topicId];
    if (!existing && result.firstAttempt !== "incorrect") {
      continue;
    }

    let record: WeakTopicRecord = existing ?? {
      topicId: result.topicId,
      incorrectFirstAttempts: 0,
      sessionCount: 0,
      recentProblemSnapshots: [],
    };

    if (result.firstAttempt === "incorrect") {
      record = {
        ...record,
        incorrectFirstAttempts: record.incorrectFirstAttempts + 1,
        lastIncorrectAt: session.completedAt,
        recentProblemSnapshots: [buildWeakSnapshot(session, result), ...record.recentProblemSnapshots].slice(
          0,
          MAX_WEAK_SNAPSHOTS,
        ),
      };

      if (!topicsCountedInSession.has(result.topicId)) {
        record = {
          ...record,
          sessionCount: record.sessionCount + 1,
        };
        topicsCountedInSession.add(result.topicId);
      }
    }

    if (result.firstAttempt === "correct") {
      record = {
        ...record,
        lastCorrectAt: session.completedAt,
      };
    }

    next[result.topicId] = record;
  }

  return next;
}

export function loadProgress(grade: Grade): UserProgress {
  if (typeof window === "undefined") return getDefaultProgress(grade);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress(grade);
    const data = JSON.parse(raw) as Record<string, UserProgress>;
    return normalizeProgress(data[String(grade)], grade);
  } catch {
    return getDefaultProgress(grade);
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data: Record<string, UserProgress> = raw ? JSON.parse(raw) : {};
    const normalized = normalizeProgress(progress, progress.grade);
    data[String(progress.grade)] = { ...normalized, updatedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage が使えない環境では無視
  }
}

export function updateMastery(
  progress: UserProgress,
  topicId: string,
  mastery: TopicMastery,
): UserProgress {
  return {
    ...progress,
    masteries: { ...progress.masteries, [topicId]: mastery },
  };
}

export function addSession(
  progress: UserProgress,
  session: SessionRecord,
): UserProgress {
  const sessions = [...progress.sessions, session].slice(-MAX_SESSIONS);
  return {
    ...progress,
    sessions,
    weakTopics: updateWeakTopics(progress.weakTopics, session),
    totalStars: computeTotalStars(sessions),
  };
}

export function addBadge(
  progress: UserProgress,
  badge: BadgeInfo,
): UserProgress {
  const alreadyHas = progress.badges.some((b) => b.id === badge.id);
  if (alreadyHas) return progress;
  return { ...progress, badges: [...progress.badges, badge] };
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
