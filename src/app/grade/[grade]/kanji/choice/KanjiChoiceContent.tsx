"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Grade, KanjiChoiceProblem, KanjiEntry } from "@/types/problem";
import { GRADE1_KANJI } from "@/data/kanji/grade1";
import { GRADE2_KANJI } from "@/data/kanji/grade2";
import { GRADE3_KANJI } from "@/data/kanji/grade3";
import { generateChoiceProblem } from "@/data/kanji/generator";
import { selectAdaptiveProblems } from "@/lib/adaptive";
import { pickRandom } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { useProblemSession } from "@/hooks/useProblemSession";
import { ProblemShell } from "@/components/problem/ProblemShell";
import { MultipleChoice } from "@/components/problem/MultipleChoice";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { SessionSummary } from "@/components/feedback/SessionSummary";
import { StarBurst } from "@/components/feedback/StarBurst";

const KANJI_BY_GRADE = { 1: GRADE1_KANJI, 2: GRADE2_KANJI, 3: GRADE3_KANJI };
const SESSION_SIZE = 10;
const MAX_UNIQUE_ATTEMPTS_PER_SLOT = 8;

function getChoiceSignature(problem: KanjiChoiceProblem): string {
  return `${problem.question}:${problem.choices.join("|")}:${problem.answer}`;
}

function addInstanceIds(problems: KanjiChoiceProblem[]): KanjiChoiceProblem[] {
  return problems.map((problem, index) => ({
    ...problem,
    id: `${problem.id}:instance:${index}`,
  }));
}

function buildChoiceProblemPool(entries: readonly KanjiEntry[], sessionSize: number): KanjiChoiceProblem[] {
  if (entries.length === 0 || sessionSize <= 0) return [];

  const pool: KanjiChoiceProblem[] = [];
  const seenSignatures = new Set<string>();

  const tryPush = (problem: KanjiChoiceProblem, allowDuplicate = false): boolean => {
    const signature = getChoiceSignature(problem);
    if (!allowDuplicate && seenSignatures.has(signature)) return false;
    seenSignatures.add(signature);
    pool.push(problem);
    return true;
  };

  for (const entry of entries) {
    tryPush(generateChoiceProblem(entry, entries));
  }

  let attempts = 0;
  const maxAttempts = sessionSize * entries.length * MAX_UNIQUE_ATTEMPTS_PER_SLOT;
  while (pool.length < sessionSize && attempts < maxAttempts) {
    attempts += 1;
    const entry = pickRandom(entries);
    tryPush(generateChoiceProblem(entry, entries));
  }

  while (pool.length < sessionSize) {
    const entry = pickRandom(entries);
    tryPush(generateChoiceProblem(entry, entries), true);
  }

  return addInstanceIds(pool);
}

export default function KanjiChoiceContent({ gradeStr }: { gradeStr: string }) {
  const grade = parseInt(gradeStr, 10) as Grade;
  const router = useRouter();

  const { progress, recordAnswer, recordSession } = useProgress(grade);

  const allEntries = KANJI_BY_GRADE[grade] ?? GRADE1_KANJI;
  const allProblems = buildChoiceProblemPool(allEntries, SESSION_SIZE);
  const selected = selectAdaptiveProblems(
    allProblems,
    progress.masteries,
    (p) => `kanji:${(p as KanjiChoiceProblem).character}`,
    SESSION_SIZE,
  );

  const { state, currentProblem, submitAnswer, nextProblem, retryAnswer, getDurationMs, resetSession } =
    useProblemSession(selected, progress.masteries, (p) => `kanji:${(p as KanjiChoiceProblem).character}`, recordAnswer);

  const [starBurst, setStarBurst] = useState(false);

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      submitAnswer(isCorrect);
      if (isCorrect) setStarBurst(true);
    },
    [submitAnswer],
  );

  const handleNext = useCallback(() => {
    setStarBurst(false);
    nextProblem();
  }, [nextProblem]);

  const handleComplete = useCallback(() => {
    recordSession({
      id: state.sessionId,
      grade,
      subject: "kanji",
      mode: "choice",
      totalProblems: state.problems.length,
      correctCount: state.correctCount,
      completedAt: Date.now(),
      durationMs: getDurationMs(),
    });
  }, [state, grade, recordSession, getDurationMs]);

  if (state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex items-center justify-center px-4">
        <SessionSummary
          correct={state.correctCount}
          total={state.problems.length}
          onRetry={resetSession}
          onHome={() => router.push(`/grade/${grade}/kanji`)}
        />
      </div>
    );
  }

  if (!currentProblem) return null;
  const problem = currentProblem as KanjiChoiceProblem;
  const currentAnswer = state.answers[state.currentIndex];
  const answered = currentAnswer !== "unanswered";
  const isCorrect = currentAnswer === "correct";

  return (
    <>
      <StarBurst trigger={starBurst} />
      <ProblemShell
        title="4たくもんだい"
        current={state.currentIndex + 1}
        total={state.problems.length}
        onQuit={() => router.push(`/grade/${grade}/kanji`)}
      >
        <MultipleChoice
          key={`${state.currentIndex}-${state.retryCount}`}
          problem={problem}
          onAnswer={handleAnswer}
          answered={answered}
          isCorrect={isCorrect}
        />
        {answered && (
          <AnswerFeedback
            isCorrect={isCorrect}
            correctAnswer={problem.answer}
            onNext={() => {
              if (state.currentIndex === state.problems.length - 1) handleComplete();
              handleNext();
            }}
            onRetry={retryAnswer}
            isLast={state.currentIndex === state.problems.length - 1}
          />
        )}
      </ProblemShell>
    </>
  );
}
