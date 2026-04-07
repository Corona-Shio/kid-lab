"use client";

import { useMemo } from "react";
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
  isLast: boolean;
  messageSeed?: string | number;
  fixedCorrectMessage?: string;
}

export function AnswerFeedback({
  isCorrect,
  correctAnswer,
  onNext,
  isLast,
  messageSeed,
  fixedCorrectMessage,
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-col items-center gap-4 mt-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 600, damping: 15, delay: 0.15 }}
          className="text-5xl"
        >
          {isCorrect ? "🎉" : "😅"}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={[
            "text-2xl font-bold",
            isCorrect ? "text-emerald-600" : "text-rose-500",
          ].join(" ")}
        >
          {message}
        </motion.p>

        {isCorrect ? null : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base text-gray-600 font-medium"
          >
            せいかい: <span className="font-bold text-emerald-600">{correctAnswer}</span>
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={onNext} size="lg">
            {isLast ? "けっかをみる 📊" : "つぎへ →"}
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
