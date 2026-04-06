"use client";

import type { UserProgress, SessionRecord, TopicMastery, BadgeInfo } from "@/types/progress";
import type { Grade } from "@/types/problem";

const STORAGE_KEY = "kid-lab:progress";
const MAX_SESSIONS = 100;

function getDefaultProgress(grade: Grade): UserProgress {
  return {
    grade,
    masteries: {},
    sessions: [],
    badges: [],
    totalStars: 0,
    updatedAt: Date.now(),
  };
}

export function loadProgress(grade: Grade): UserProgress {
  if (typeof window === "undefined") return getDefaultProgress(grade);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress(grade);
    const data = JSON.parse(raw) as Record<string, UserProgress>;
    return data[String(grade)] ?? getDefaultProgress(grade);
  } catch {
    return getDefaultProgress(grade);
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data: Record<string, UserProgress> = raw ? JSON.parse(raw) : {};
    // セッション上限管理
    if (progress.sessions.length > MAX_SESSIONS) {
      progress = { ...progress, sessions: progress.sessions.slice(-MAX_SESSIONS) };
    }
    data[String(progress.grade)] = { ...progress, updatedAt: Date.now() };
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
  const stars = Math.floor((session.correctCount / session.totalProblems) * 3);
  return {
    ...progress,
    sessions: [...progress.sessions, session],
    totalStars: progress.totalStars + stars,
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
