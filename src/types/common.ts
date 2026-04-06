import type { Grade } from "./problem";

export interface GradeTheme {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  label: string;
  emoji: string;
}

export const GRADE_THEMES: Record<Grade, GradeTheme> = {
  1: {
    primary: "from-pink-400 to-rose-500",
    secondary: "bg-pink-100",
    accent: "text-rose-500",
    bg: "bg-pink-50",
    label: "1ねんせい",
    emoji: "🌸",
  },
  2: {
    primary: "from-sky-400 to-blue-500",
    secondary: "bg-sky-100",
    accent: "text-blue-500",
    bg: "bg-sky-50",
    label: "2ねんせい",
    emoji: "⭐",
  },
  3: {
    primary: "from-emerald-400 to-green-500",
    secondary: "bg-emerald-100",
    accent: "text-green-500",
    bg: "bg-emerald-50",
    label: "3ねんせい",
    emoji: "🌿",
  },
};
