"use client";

import { use, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Grade, MathUnit, MathCalcProblem } from "@/types/problem";
import { UNITS_BY_GRADE, UNIT_LABELS } from "@/types/problem";
import { generateCalcProblems } from "@/data/math/generators";
import { shuffle } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { useProblemSession } from "@/hooks/useProblemSession";
import { ProblemShell } from "@/components/problem/ProblemShell";
import { CalcInput } from "@/components/problem/CalcInput";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { SessionSummary } from "@/components/feedback/SessionSummary";
import { StarBurst } from "@/components/feedback/StarBurst";
import { Header } from "@/components/layout/Header";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Card } from "@/components/ui/Card";

interface Params { grade: string }

export default function UnitTestPage({ params }: { params: Promise<Params> }) {
  const { grade: gradeStr } = use(params);
  const grade = parseInt(gradeStr, 10) as Grade;
  const router = useRouter();

  const [selectedUnit, setSelectedUnit] = useState<MathUnit | null>(null);
  const units = UNITS_BY_GRADE[grade] ?? UNITS_BY_GRADE[1];

  const { recordAnswer, recordSession, progress } = useProgress(grade);

  // 単元選択前
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header title="📋 たんげんテスト" showBack backHref={`/grade/${grade}/math`} />
        <PageWrapper>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-gray-700 text-center mb-6"
            style={{ fontFamily: "var(--font-kaisei-decol)" }}
          >
            たんげんをえらんでね
          </motion.h2>
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            {units.map((unit, i) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Card onClick={() => setSelectedUnit(unit)}>
                  <p className="text-lg font-bold text-gray-700">{UNIT_LABELS[unit]}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </PageWrapper>
      </div>
    );
  }

  return (
    <UnitTestSession
      grade={grade}
      unit={selectedUnit}
      masteries={progress.masteries}
      onAnswer={recordAnswer}
      onComplete={(correct, total, sessionId, durationMs) => {
        recordSession({
          id: sessionId,
          grade,
          subject: "math",
          mode: "unit-test",
          unit: selectedUnit,
          totalProblems: total,
          correctCount: correct,
          completedAt: Date.now(),
          durationMs,
        });
      }}
      onHome={() => router.push(`/grade/${grade}/math`)}
      onRetry={() => setSelectedUnit(null)}
    />
  );
}

function UnitTestSession({
  grade,
  unit,
  masteries,
  onAnswer,
  onComplete,
  onHome,
  onRetry,
}: {
  grade: Grade;
  unit: MathUnit;
  masteries: Record<string, import("@/types/progress").TopicMastery>;
  onAnswer: (id: string, m: import("@/types/progress").TopicMastery) => void;
  onComplete: (correct: number, total: number, sessionId: string, durationMs: number) => void;
  onHome: () => void;
  onRetry: () => void;
}) {
  const problems = shuffle(generateCalcProblems(unit, 20)).slice(0, 10);

  const { state, currentProblem, submitAnswer, nextProblem, getDurationMs } =
    useProblemSession(problems, masteries, (p) => `math:${(p as MathCalcProblem).unit}`, onAnswer);

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

  if (state.isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <SessionSummary
          correct={state.correctCount}
          total={state.problems.length}
          onRetry={onRetry}
          onHome={onHome}
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
        title={`テスト: ${UNIT_LABELS[unit]}`}
        current={state.currentIndex + (answered ? 1 : 0)}
        total={state.problems.length}
        onQuit={onHome}
      >
        <CalcInput problem={problem} onAnswer={handleAnswer} answered={answered} isCorrect={isCorrect} />
        {answered && (
          <AnswerFeedback
            isCorrect={isCorrect}
            correctAnswer={String(problem.answer)}
            onNext={() => {
              if (state.currentIndex === state.problems.length - 1) {
                onComplete(state.correctCount + (isCorrect ? 1 : 0), state.problems.length, state.sessionId, getDurationMs());
              }
              handleNext();
            }}
            isLast={state.currentIndex === state.problems.length - 1}
          />
        )}
      </ProblemShell>
    </>
  );
}
