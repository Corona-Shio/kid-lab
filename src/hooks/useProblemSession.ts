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
}

export function useProblemSession(
  problems: Problem[],
  masteries: Record<string, TopicMastery>,
  getTopicId: (p: Problem) => string,
  onMasteryUpdate: (topicId: string, mastery: TopicMastery) => void,
) {
  const startedAt = useRef(Date.now());
  const [state, setState] = useState<ProblemSessionState>({
    sessionId: generateSessionId(),
    problems,
    currentIndex: 0,
    answers: new Array(problems.length).fill("unanswered") as AnswerState[],
    correctCount: 0,
    isComplete: false,
    startedAt: startedAt.current,
  });

  const currentProblem = state.problems[state.currentIndex] ?? null;

  const submitAnswer = useCallback(
    (isCorrect: boolean) => {
      const problem = state.problems[state.currentIndex];
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
    [state.problems, state.currentIndex, masteries, getTopicId, onMasteryUpdate],
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
      return { ...prev, answers };
    });
  }, []);

  const getDurationMs = useCallback(() => {
    return Date.now() - startedAt.current;
  }, []);

  return { state, currentProblem, submitAnswer, nextProblem, retryAnswer, getDurationMs };
}
