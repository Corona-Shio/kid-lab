"use client";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { pickRandom } from "@/lib/utils";

const CORRECT_MESSAGES = [
  "すごい！！",
  "やったね！",
  "正解！✨",
  "かんぺき！",
  "さすが！",
  "えらい！",
];

const INCORRECT_MESSAGES = [
  "おしい！",
  "つぎはできるよ！",
  "がんばれ！",
  "もうちょっと！",
  "ドンマイ！",
];

function getSeededIndex(seed: string | number, size: number) {
  const raw = String(seed);
  let hash = 0;
  for (const char of raw) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash % size;
}

interface AnswerFeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
  onNext: () => void;
  onRetry?: () => void;
  isLast: boolean;
  messageSeed?: string | number;
  fixedCorrectMessage?: string;
  compactMobile?: boolean;
}

export function AnswerFeedback({
  isCorrect,
  correctAnswer,
  onNext,
  onRetry,
  isLast,
  messageSeed,
  fixedCorrectMessage,
  compactMobile = false,
}: AnswerFeedbackProps) {
  const message = useMemo(() => {
    if (isCorrect && fixedCorrectMessage) {
      return fixedCorrectMessage;
    }

    const pool = isCorrect ? CORRECT_MESSAGES : INCORRECT_MESSAGES;
    if (messageSeed === undefined) {
      return pickRandom(pool);
    }
    return pool[getSeededIndex(messageSeed, pool.length)];
  }, [fixedCorrectMessage, isCorrect, messageSeed]);

  const containerClass = compactMobile
    ? "flex flex-col items-center gap-3 mt-3 sm:gap-4 sm:mt-4"
    : "flex flex-col items-center gap-4 mt-4";
  const iconClass = compactMobile ? "text-4xl sm:text-5xl" : "text-5xl";
  const messageClass = [
    compactMobile ? "text-xl sm:text-2xl" : "text-2xl",
    "font-bold",
    isCorrect ? "text-emerald-600" : "text-rose-500",
  ].join(" ");
  const answerClass = compactMobile
    ? "text-sm sm:text-base text-gray-600 font-medium"
    : "text-base text-gray-600 font-medium";

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (
        event.defaultPrevented ||
        event.repeat ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.shiftKey
      ) {
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        if (isCorrect) {
          onNext();
          return;
        }
        onRetry?.();
        return;
      }

      const key = event.key.toLowerCase();
      if (!isCorrect && key === "s") {
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCorrect, onNext, onRetry]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className={containerClass}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 600, damping: 15, delay: 0.15 }}
          className={iconClass}
        >
          {isCorrect ? "🎉" : "😅"}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={messageClass}
        >
          {message}
        </motion.p>

        {isCorrect ? null : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={answerClass}
          >
            せいかい: <span className="font-bold text-emerald-600">{correctAnswer}</span>
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          {isCorrect ? (
            <Button onClick={onNext} size={compactMobile ? "md" : "lg"}>
              {isLast ? "けっかをみる 📊" : "つぎへ →"}
            </Button>
          ) : (
            <>
              <Button onClick={onRetry} size={compactMobile ? "md" : "lg"}>
                もういちど！
              </Button>
              <Button onClick={onNext} variant="ghost" size={compactMobile ? "sm" : "md"}>
                スキップ [S]
              </Button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
