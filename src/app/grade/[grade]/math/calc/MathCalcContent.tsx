"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Grade, MathCalcProblem } from "@/types/problem";
import { UNITS_BY_GRADE } from "@/types/problem";
import { generateCalcProblems } from "@/data/math/generators";
import { selectAdaptiveProblems } from "@/lib/adaptive";
import { useProgress } from "@/hooks/useProgress";
import { useProblemSession } from "@/hooks/useProblemSession";
import { ProblemShell } from "@/components/problem/ProblemShell";
import { CalcInput } from "@/components/problem/CalcInput";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { SessionSummary } from "@/components/feedback/SessionSummary";
import { StarBurst } from "@/components/feedback/StarBurst";

export default function MathCalcContent({ gradeStr }: { gradeStr: string }) {
  const grade = parseInt(gradeStr, 10) as Grade;
  const router = useRouter();

  const { progress, recordAnswer, recordSession } = useProgress(grade);

  const units = UNITS_BY_GRADE[grade] ?? UNITS_BY_GRADE[1];
  const allProblems = units.flatMap((unit) => generateCalcProblems(unit, 4));
  const selected = selectAdaptiveProblems(
    allProblems,
    progress.masteries,
    (p) => `math:${(p as MathCalcProblem).unit}`,
    10,
  );

  const { state, currentProblem, problemResults, submitAnswer, nextProblem, retryAnswer, getDurationMs, resetSession } =
    useProblemSession(selected, progress.masteries, (p) => `math:${(p as MathCalcProblem).unit}`, recordAnswer);

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
      mode: "calc",
      totalProblems: state.problems.length,
      correctCount: state.correctCount,
      problemResults,
      completedAt: Date.now(),
      durationMs: getDurationMs(),
    });
  }, [state, grade, problemResults, recordSession, getDurationMs]);

  if (state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex items-center justify-center px-4">
        <SessionSummary
          correct={state.correctCount}
          total={state.problems.length}
          onRetry={resetSession}
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
        title="けいさんもんだい"
        current={state.currentIndex + 1}
        total={state.problems.length}
        onQuit={() => router.push(`/grade/${grade}/math`)}
      >
        <CalcInput
          key={`${state.currentIndex}-${state.retryCount}`}
          problem={problem}
          onAnswer={handleAnswer}
          answered={answered}
          isCorrect={isCorrect}
        />
        {answered && (
          <AnswerFeedback
            isCorrect={isCorrect}
            correctAnswer={String(problem.answer)}
            messageSeed={problem.id}
            fixedCorrectMessage="正解！"
            compactMobile
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
