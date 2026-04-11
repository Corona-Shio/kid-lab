"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { Grade, KanjiChoiceProblem } from "@/types/problem";
import { GRADE1_KANJI } from "@/data/kanji/grade1";
import { GRADE2_KANJI } from "@/data/kanji/grade2";
import { GRADE3_KANJI } from "@/data/kanji/grade3";
import { generateChoiceProblem } from "@/data/kanji/generator";
import { selectAdaptiveProblems } from "@/lib/adaptive";
import { useProgress } from "@/hooks/useProgress";
import { useProblemSession } from "@/hooks/useProblemSession";
import { ProblemShell } from "@/components/problem/ProblemShell";
import { MultipleChoice } from "@/components/problem/MultipleChoice";
import { AnswerFeedback } from "@/components/feedback/AnswerFeedback";
import { SessionSummary } from "@/components/feedback/SessionSummary";
import { StarBurst } from "@/components/feedback/StarBurst";
import { buildRubyDictionaryFromKanjiEntries } from "@/lib/ruby";

const KANJI_BY_GRADE = { 1: GRADE1_KANJI, 2: GRADE2_KANJI, 3: GRADE3_KANJI };
const ALL_KANJI_ENTRIES = [...GRADE1_KANJI, ...GRADE2_KANJI, ...GRADE3_KANJI];

export default function KanjiChoiceContent({ gradeStr }: { gradeStr: string }) {
  const grade = parseInt(gradeStr, 10) as Grade;
  const router = useRouter();

  const { progress, recordAnswer, recordSession } = useProgress(grade);

  const allEntries = KANJI_BY_GRADE[grade] ?? GRADE1_KANJI;
  const rubyDictionary = useMemo(
    () => buildRubyDictionaryFromKanjiEntries(ALL_KANJI_ENTRIES),
    [],
  );
  const allProblems = allEntries.map((e) => generateChoiceProblem(e, allEntries));
  const selected = selectAdaptiveProblems(
    allProblems,
    progress.masteries,
    (p) => `kanji:${(p as KanjiChoiceProblem).character}`,
    10,
  );

  const { state, currentProblem, problemResults, submitAnswer, nextProblem, retryAnswer, getDurationMs, resetSession } =
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
      problemResults,
      completedAt: Date.now(),
      durationMs: getDurationMs(),
    });
  }, [state, grade, problemResults, recordSession, getDurationMs]);

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
          rubyDictionary={rubyDictionary}
          onAnswer={handleAnswer}
          answered={answered}
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
