"use client";

import { useState, useCallback, useRef } from "react";
import type { Problem } from "@/types/problem";
import type { TopicMastery } from "@/types/progress";
import { updateMasteryLevel, createInitialMastery } from "@/lib/adaptive";
import { generateSessionId } from "@/lib/scoring";

export type AnswerState = "unanswered" | "correct" | "incorrect";

export interface ProblemSessionState {
  sessionId: string;
  problems: Problem[];
  currentIndex: number;
  answers: AnswerState[];
  correctCount: number;
  isComplete: boolean;
  startedAt: number;
  retryCount: number;
}

function createInitialState(problems: Problem[], startedAt: number): ProblemSessionState {
  return {
    sessionId: generateSessionId(),
    problems,
    currentIndex: 0,
    answers: new Array(problems.length).fill("unanswered") as AnswerState[],
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
  const startedAt = useRef(Date.now());
  const stateRef = useRef<ProblemSessionState | null>(null);
  const [state, setState] = useState<ProblemSessionState>(() =>
    createInitialState(problems, startedAt.current),
  );

  // 常に最新の state を ref で参照できるようにする（ステール・クロージャー防止）
  stateRef.current = state;

  const currentProblem = state.problems[state.currentIndex] ?? null;

  const submitAnswer = useCallback(
    (isCorrect: boolean) => {
      const { problems, currentIndex } = stateRef.current!;
      const problem = problems[currentIndex];
      if (!problem) return;
      const topicId = getTopicId(problem);
      const prevMastery = masteries[topicId] ?? createInitialMastery(topicId);
      const nextMastery = updateMasteryLevel(prevMastery, isCorrect);
      onMasteryUpdate(topicId, nextMastery);

      setState((prev) => {
        const answers = [...prev.answers];
        answers[prev.currentIndex] = isCorrect ? "correct" : "incorrect";
        return {
          ...prev,
          answers,
          correctCount: prev.correctCount + (isCorrect ? 1 : 0),
        };
      });
    },
    [masteries, getTopicId, onMasteryUpdate],
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
    return Date.now() - startedAt.current;
  }, []);

  const resetSession = useCallback(() => {
    startedAt.current = Date.now();
    setState(createInitialState(problems, startedAt.current));
  }, [problems]);

  return { state, currentProblem, submitAnswer, nextProblem, retryAnswer, getDurationMs, resetSession };
}
