import type { Grade, MathUnit } from "./problem";

export type MasteryLevel = "new" | "learning" | "developing" | "mastered" | "review";
export type AnswerOutcome = "correct" | "incorrect";

export interface TopicMastery {
  topicId: string;           // 例: "kanji:山" or "math:add1"
  correctCount: number;
  incorrectCount: number;
  consecutiveCorrect: number;
  level: MasteryLevel;
  lastAnsweredAt: number;    // Unix timestamp (ms)
  nextReviewAt?: number;     // 次回復習予定 (ms)
  reviewIntervalDays: number; // 現在の復習間隔（日数）
}

export interface SessionProblemResult {
  problemId: string;
  topicId: string;
  firstAttempt: AnswerOutcome;
  finalAttempt: AnswerOutcome;
  retried: boolean;
  promptSummary: string;
}

export interface SessionRecord {
  id: string;
  grade: Grade;
  subject: "kanji" | "math";
  mode: "fill" | "choice" | "calc" | "word" | "unit-test" | "summary-test";
  unit?: MathUnit;
  totalProblems: number;
  correctCount: number; // 初回判定ベースの正解数
  problemResults: SessionProblemResult[];
  completedAt: number; // Unix timestamp (ms)
  durationMs: number;
}

export interface WeakProblemSnapshot {
  sessionId: string;
  problemId: string;
  promptSummary: string;
  firstAttempt: AnswerOutcome;
  finalAttempt: AnswerOutcome;
  completedAt: number;
}

export interface WeakTopicRecord {
  topicId: string;
  incorrectFirstAttempts: number;
  sessionCount: number;
  lastIncorrectAt?: number;
  lastCorrectAt?: number;
  recentProblemSnapshots: WeakProblemSnapshot[];
}

export interface BadgeInfo {
  id: string;
  name: string;
  description: string;
  earnedAt: number; // Unix timestamp (ms)
}

export interface UserProgress {
  grade: Grade;
  masteries: Record<string, TopicMastery>; // topicId → TopicMastery
  weakTopics: Record<string, WeakTopicRecord>;
  sessions: SessionRecord[];
  badges: BadgeInfo[];
  totalStars: number;
  updatedAt: number;
}

export const BADGE_DEFINITIONS: Omit<BadgeInfo, "earnedAt">[] = [
  { id: "first-correct", name: "はじめての正解！", description: "はじめて正解した" },
  { id: "streak-3", name: "3れんぞく！", description: "3問れんぞく正解した" },
  { id: "streak-5", name: "5れんぞく！", description: "5問れんぞく正解した" },
  { id: "session-complete", name: "1セッションクリア！", description: "10問ぜんぶ答えた" },
  { id: "perfect-session", name: "まんてん！", description: "10問ぜんぶ正解した" },
  { id: "kanji-master", name: "かんじはかせ", description: "10個の漢字をマスターした" },
  { id: "math-master", name: "さんすうてんさい", description: "ひとつの単元をマスターした" },
];
