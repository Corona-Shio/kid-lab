import type { KanjiEntry } from "@/types/problem";
import type { SessionProblemResult, UserProgress } from "@/types/progress";

export interface KanjiPerformanceRow {
  character: string;
  attempts: number;
  correct: number;
  accuracy: number | null;
}

export interface WeakMathProblemRow {
  problemKey: string;
  promptSummary: string;
  attempts: number;
  incorrectFirstAttempts: number;
  accuracy: number;
  lastSeenAt: number;
}

function toFirstAttempt(result: SessionProblemResult): "correct" | "incorrect" {
  if (result.firstAttempt === "correct" || result.firstAttempt === "incorrect") {
    return result.firstAttempt;
  }
  return result.finalAttempt === "correct" ? "correct" : "incorrect";
}

function parseKanjiCharacter(topicId: string): string | null {
  if (!topicId.startsWith("kanji:")) return null;
  const character = topicId.slice("kanji:".length).trim();
  return character.length > 0 ? character : null;
}

export function buildKanjiPerformanceRows(
  entries: KanjiEntry[],
  progress: UserProgress,
): KanjiPerformanceRow[] {
  const trackedCharacters = new Set(entries.map((entry) => entry.character));
  const counts = new Map<string, { attempts: number; correct: number }>();

  for (const session of progress.sessions) {
    if (session.subject !== "kanji") continue;
    for (const result of session.problemResults) {
      const character = parseKanjiCharacter(result.topicId);
      if (!character || !trackedCharacters.has(character)) continue;

      const current = counts.get(character) ?? { attempts: 0, correct: 0 };
      current.attempts += 1;
      if (toFirstAttempt(result) === "correct") {
        current.correct += 1;
      }
      counts.set(character, current);
    }
  }

  return entries.map((entry) => {
    const stat = counts.get(entry.character) ?? { attempts: 0, correct: 0 };
    return {
      character: entry.character,
      attempts: stat.attempts,
      correct: stat.correct,
      accuracy: stat.attempts > 0 ? Math.round((stat.correct / stat.attempts) * 100) : null,
    };
  });
}

export function buildWeakMathProblemRows(
  progress: UserProgress,
  limit = 20,
): WeakMathProblemRow[] {
  const map = new Map<string, WeakMathProblemRow>();

  for (const session of progress.sessions) {
    if (session.subject !== "math") continue;

    for (const result of session.problemResults) {
      const firstAttempt = toFirstAttempt(result);
      const key = result.problemKey ?? `legacy:${result.promptSummary}`;
      const existing = map.get(key) ?? {
        problemKey: key,
        promptSummary: result.promptSummary,
        attempts: 0,
        incorrectFirstAttempts: 0,
        accuracy: 0,
        lastSeenAt: session.completedAt,
      };

      existing.attempts += 1;
      if (firstAttempt === "incorrect") {
        existing.incorrectFirstAttempts += 1;
      }
      if (session.completedAt >= existing.lastSeenAt) {
        existing.promptSummary = result.promptSummary;
        existing.lastSeenAt = session.completedAt;
      }
      map.set(key, existing);
    }
  }

  return [...map.values()]
    .map((row) => ({
      ...row,
      accuracy: row.attempts > 0
        ? Math.round(((row.attempts - row.incorrectFirstAttempts) / row.attempts) * 100)
        : 0,
    }))
    .filter((row) => row.incorrectFirstAttempts > 0)
    .sort((a, b) => {
      if (b.incorrectFirstAttempts !== a.incorrectFirstAttempts) {
        return b.incorrectFirstAttempts - a.incorrectFirstAttempts;
      }
      return b.lastSeenAt - a.lastSeenAt;
    })
    .slice(0, limit);
}
