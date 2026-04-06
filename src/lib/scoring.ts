import type { SessionRecord } from "@/types/progress";

export function calcStars(correct: number, total: number): number {
  const rate = total > 0 ? correct / total : 0;
  if (rate >= 0.9) return 3;
  if (rate >= 0.7) return 2;
  if (rate >= 0.5) return 1;
  return 0;
}

export function calcAccuracy(sessions: SessionRecord[]): number {
  if (sessions.length === 0) return 0;
  const total = sessions.reduce((s, r) => s + r.totalProblems, 0);
  const correct = sessions.reduce((s, r) => s + r.correctCount, 0);
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}

export function generateSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
