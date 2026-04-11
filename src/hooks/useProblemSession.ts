"use client";

import { useState, useCallback, useMemo } from "react";
import type { Problem } from "@/types/problem";
import type { AnswerOutcome, SessionProblemResult, TopicMastery } from "@/types/progress";
import { updateMasteryLevel, createInitialMastery } from "@/lib/adaptive";
import { generateSessionId } from "@/lib/scoring";

export type AnswerState = "unanswered" | "correct" | "incorrect";

export interface ProblemSessionState {
  sessionId: string;
  problems: Problem[];
  topicIds: string[];
  currentIndex: number;
  answers: AnswerState[];
  firstAttemptAnswers: AnswerState[];
  finalAnswers: AnswerState[];
  attemptCounts: number[];
  correctCount: number;
  isComplete: boolean;
  startedAt: number;
  retryCount: number;
}

function createPromptSummary(problem: Problem): string {
  switch (problem.type) {
    case "fill":
      return `「${problem.character}」のよみ: ${problem.sentence}`;
    case "choice":
      return problem.question;
    case "calc":
      return problem.expression;
    case "word":
      return `${problem.text} ${problem.question}`;
  }

  const exhaustiveCheck: never = problem;
  return exhaustiveCheck;
}

function toAnswerOutcome(primary: AnswerState, fallback: AnswerState): AnswerOutcome {
  const resolved = primary === "unanswered" ? fallback : primary;
  return resolved === "correct" ? "correct" : "incorrect";
}

function createInitialState(
  problems: Problem[],
  startedAt: number,
  getTopicId: (p: Problem) => string,
): ProblemSessionState {
  return {
    sessionId: generateSessionId(),
    problems,
    topicIds: problems.map((problem) => getTopicId(problem)),
    currentIndex: 0,
    answers: new Array(problems.length).fill("unanswered") as AnswerState[],
    firstAttemptAnswers: new Array(problems.length).fill("unanswered") as AnswerState[],
    finalAnswers: new Array(problems.length).fill("unanswered") as AnswerState[],
    attemptCounts: new Array(problems.length).fill(0),
    correctCount: 0,
    isComplete: false,
    startedAt,
    retryCount: 0,
  };
}

export function useProblemSession(
  problems: Problem[],
  masteries: Record<string, TopicMastery>,
  getTopicId: (p: Problem) => string,
  onMasteryUpdate: (topicId: string, mastery: TopicMastery) => void,
) {
  const [state, setState] = useState<ProblemSessionState>(() => {
    const initialStartedAt = Date.now();
    return createInitialState(problems, initialStartedAt, getTopicId);
  });

  const currentProblem = state.problems[state.currentIndex] ?? null;
  const problemResults = useMemo<SessionProblemResult[]>(
    () =>
      state.problems.map((problem, index) => ({
        problemId: problem.id,
        topicId: state.topicIds[index] ?? getTopicId(problem),
        firstAttempt: toAnswerOutcome(state.firstAttemptAnswers[index], state.finalAnswers[index]),
        finalAttempt: toAnswerOutcome(state.finalAnswers[index], state.firstAttemptAnswers[index]),
        retried: state.attemptCounts[index] > 1,
        promptSummary: createPromptSummary(problem),
      })),
    [state.problems, state.topicIds, state.firstAttemptAnswers, state.finalAnswers, state.attemptCounts, getTopicId],
  );

  const submitAnswer = useCallback(
    (isCorrect: boolean) => {
      const problem = currentProblem;
      if (!problem) return;
      const topicId = getTopicId(problem);
      const prevMastery = masteries[topicId] ?? createInitialMastery(topicId);
      const nextMastery = updateMasteryLevel(prevMastery, isCorrect);
      onMasteryUpdate(topicId, nextMastery);

      setState((prev) => {
        const answers = [...prev.answers];
        const firstAttemptAnswers = [...prev.firstAttemptAnswers];
        const finalAnswers = [...prev.finalAnswers];
        const attemptCounts = [...prev.attemptCounts];
        const nextAnswer = isCorrect ? "correct" : "incorrect";
        const isFirstAttempt = firstAttemptAnswers[prev.currentIndex] === "unanswered";

        answers[prev.currentIndex] = nextAnswer;
        finalAnswers[prev.currentIndex] = nextAnswer;
        attemptCounts[prev.currentIndex] += 1;

        if (isFirstAttempt) {
          firstAttemptAnswers[prev.currentIndex] = nextAnswer;
        }

        return {
          ...prev,
          answers,
          firstAttemptAnswers,
          finalAnswers,
          attemptCounts,
          correctCount: prev.correctCount + (isFirstAttempt && isCorrect ? 1 : 0),
        };
      });
    },
    [currentProblem, masteries, getTopicId, onMasteryUpdate],
  );

  const nextProblem = useCallback(() => {
    setState((prev) => {
      const nextIndex = prev.currentIndex + 1;
      return {
        ...prev,
        currentIndex: nextIndex,
        isComplete: nextIndex >= prev.problems.length,
      };
    });
  }, []);

  const retryAnswer = useCallback(() => {
    setState((prev) => {
      const answers = [...prev.answers];
      answers[prev.currentIndex] = "unanswered";
      return { ...prev, answers, retryCount: prev.retryCount + 1 };
    });
  }, []);

  const getDurationMs = useCallback(() => {
    return Date.now() - state.startedAt;
  }, [state.startedAt]);

  const resetSession = useCallback(() => {
    const nextStartedAt = Date.now();
    setState(createInitialState(problems, nextStartedAt, getTopicId));
  }, [problems, getTopicId]);

  return { state, currentProblem, problemResults, submitAnswer, nextProblem, retryAnswer, getDurationMs, resetSession };
}
