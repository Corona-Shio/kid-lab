"use client";

import { motion } from "framer-motion";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { calcStars } from "@/lib/scoring";

interface SessionSummaryProps {
  correct: number;
  total: number;
  onRetry: () => void;
  onHome: () => void;
}

export function SessionSummary({
  correct,
  total,
  onRetry,
  onHome,
}: SessionSummaryProps) {
  const stars = calcStars(correct, total);
  const pct = Math.round((correct / total) * 100);

  const message =
    pct === 100
      ? "まんてん！すばらしい！🎆"
      : pct >= 80
      ? "とってもよくできました！🌟"
      : pct >= 60
      ? "よくがんばりました！"
      : "またちょうせんしよう！💪";

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="text-8xl"
      >
        {pct === 100 ? "🏆" : pct >= 80 ? "🌟" : pct >= 60 ? "😊" : "😤"}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-gray-700 text-center"
      >
        {message}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold text-purple-600"
      >
        {correct} / {total} もん せいかい
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <StarRating stars={stars} animate />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col gap-3 w-full max-w-xs"
      >
        <Button onClick={onRetry} size="lg">
          もういちど！ 🔄
        </Button>
        <Button variant="secondary" onClick={onHome} size="lg">
          メニューにもどる
        </Button>
      </motion.div>
    </div>
  );
}
