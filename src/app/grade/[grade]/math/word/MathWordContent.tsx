"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Grade, MathWordProblem } from "@/types/problem";
import { UNITS_BY_GRADE } from "@/types/problem";
import { generateWordProblems } from "@/data/math/generators";
import { selectAdaptiveProblems } from "@/lib/adaptive";
import { useProgress } from "@/hooks/useProgress";
import { useProblemSession } from "@/hooks/useProblemSession";
import { ProblemShell } from "@/components/problem/ProblemShell";
import { WordProblem } from "@/components/problem/WordProblem";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { SessionSummary } from "@/components/feedback/SessionSummary";
import { StarBurst } from "@/components/feedback/StarBurst";

export default function MathWordContent({ gradeStr }: { gradeStr: string }) {
  const grade = parseInt(gradeStr, 10) as Grade;
  const router = useRouter();

  const { progress, recordAnswer, recordSession } = useProgress(grade);

  const units = UNITS_BY_GRADE[grade] ?? UNITS_BY_GRADE[1];
  const allProblems = units.flatMap((unit) => generateWordProblems(unit, 4));
  const selected = selectAdaptiveProblems(
    allProblems,
    progress.masteries,
    (p) => `math:${(p as MathWordProblem).unit}`,
    Math.min(10, allProblems.length),
  );

  const { state, currentProblem, submitAnswer, nextProblem, getDurationMs } =
    useProblemSession(selected, progress.masteries, (p) => `math:${(p as MathWordProblem).unit}`, recordAnswer);

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
      subject: "math",
      mode: "word",
      totalProblems: state.problems.length,
      correctCount: state.correctCount,
      completedAt: Date.now(),
      durationMs: getDurationMs(),
    });
  }, [state, grade, recordSession, getDurationMs]);

  if (state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex items-center justify-center px-4">
        <SessionSummary
          correct={state.correctCount}
          total={state.problems.length}
          onRetry={() => router.refresh()}
          onHome={() => router.push(`/grade/${grade}/math`)}
        />
      </div>
    );
  }

  if (!currentProblem) return null;
  const problem = currentProblem as MathWordProblem;
  const currentAnswer = state.answers[state.currentIndex];
  const answered = currentAnswer !== "unanswered";
  const isCorrect = currentAnswer === "correct";

  return (
    <>
      <StarBurst trigger={starBurst} />
      <ProblemShell
        title="ぶんしょうもんだい"
        current={state.currentIndex + (answered ? 1 : 0)}
        total={state.problems.length}
        onQuit={() => router.push(`/grade/${grade}/math`)}
      >
        <WordProblem
          problem={problem}
          onAnswer={handleAnswer}
          answered={answered}
          isCorrect={isCorrect}
        />
        {answered && (
          <AnswerFeedback
            isCorrect={isCorrect}
            correctAnswer={`${problem.answer} ${problem.unit_label}`}
            onNext={() => {
              if (state.currentIndex === state.problems.length - 1) handleComplete();
              handleNext();
            }}
            isLast={state.currentIndex === state.problems.length - 1}
          />
        )}
      </ProblemShell>
    </>
  );
}
