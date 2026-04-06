"use client";

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

interface AnswerFeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
  onNext: () => void;
  isLast: boolean;
}

export function AnswerFeedback({
  isCorrect,
  correctAnswer,
  onNext,
  isLast,
}: AnswerFeedbackProps) {
  const message = isCorrect
    ? pickRandom(CORRECT_MESSAGES)
    : pickRandom(INCORRECT_MESSAGES);

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
          className={[
            "text-5xl",
          ].join(" ")}
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

        {!isCorrect && (
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
