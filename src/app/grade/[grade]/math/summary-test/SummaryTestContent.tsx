"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Grade, MathCalcProblem } from "@/types/problem";
import { UNITS_BY_GRADE } from "@/types/problem";
import { generateCalcProblems } from "@/data/math/generators";
import { shuffle } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { useProblemSession } from "@/hooks/useProblemSession";
import { ProblemShell } from "@/components/problem/ProblemShell";
import { CalcInput } from "@/components/problem/CalcInput";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { SessionSummary } from "@/components/feedback/SessionSummary";
import { StarBurst } from "@/components/feedback/StarBurst";

export default function SummaryTestContent({ gradeStr }: { gradeStr: string }) {
  const grade = parseInt(gradeStr, 10) as Grade;
  const router = useRouter();

  const { progress, recordAnswer, recordSession } = useProgress(grade);

  const units = UNITS_BY_GRADE[grade] ?? UNITS_BY_GRADE[1];
  const perUnit = Math.max(1, Math.ceil(20 / units.length));
  const allProblems = shuffle(
    units.flatMap((unit) => generateCalcProblems(unit, perUnit)),
  ).slice(0, 20);

  const { state, currentProblem, submitAnswer, nextProblem, getDurationMs } =
    useProblemSession(allProblems, progress.masteries, (p) => `math:${(p as MathCalcProblem).unit}`, recordAnswer);

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
      mode: "summary-test",
      totalProblems: state.problems.length,
      correctCount: state.correctCount,
      completedAt: Date.now(),
      durationMs: getDurationMs(),
    });
  }, [state, grade, recordSession, getDurationMs]);

  if (state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4">
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
  const problem = currentProblem as MathCalcProblem;
  const currentAnswer = state.answers[state.currentIndex];
  const answered = currentAnswer !== "unanswered";
  const isCorrect = currentAnswer === "correct";

  return (
    <>
      <StarBurst trigger={starBurst} />
      <ProblemShell
        title="🏆 まとめテスト"
        current={state.currentIndex + (answered ? 1 : 0)}
        total={state.problems.length}
        onQuit={() => router.push(`/grade/${grade}/math`)}
      >
        <CalcInput
          problem={problem}
          onAnswer={handleAnswer}
          answered={answered}
          isCorrect={isCorrect}
        />
        {answered && (
          <AnswerFeedback
            isCorrect={isCorrect}
            correctAnswer={String(problem.answer)}
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
