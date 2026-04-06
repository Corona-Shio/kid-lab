"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { KanjiFillProblem } from "@/types/problem";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface FillInBlankProps {
  problem: KanjiFillProblem;
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  answered: boolean;
  isCorrect?: boolean;
}

export function FillInBlank({
  problem,
  onAnswer,
  answered,
  isCorrect,
}: FillInBlankProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!answered) {
      setInput("");
      inputRef.current?.focus();
    }
  }, [problem.id, answered]);

  function handleSubmit() {
    if (answered || !input.trim()) return;
    const correct = input.trim() === problem.answer;
    onAnswer(correct, input.trim());
  }

  return (
    <div className="flex flex-col gap-5">
      {/* 漢字を大きく表示 */}
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={[
            "w-32 h-32 flex items-center justify-center rounded-3xl border-4 shadow-lg text-7xl font-bold select-none",
            answered
              ? isCorrect
                ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                : "border-rose-400 bg-rose-50 text-rose-700"
              : "border-purple-300 bg-white text-gray-800",
          ].join(" ")}
          style={{ fontFamily: "var(--font-kaisei-decol)" }}
        >
          {problem.character}
        </motion.div>
      </div>

      {/* 例文 */}
      <Card variant="default">
        <p className="text-lg text-gray-600 leading-relaxed text-center py-1">
          {problem.sentence}
        </p>
      </Card>

      {/* 読み方入力 */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-purple-500 font-bold">よみかたをひらがなでかいてね</p>
        <motion.input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => !answered && setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          disabled={answered}
          placeholder="ひらがなでかく"
          className={[
            "w-48 h-14 text-2xl font-bold text-center rounded-2xl border-4 outline-none transition-all duration-200",
            "bg-white shadow-inner",
            answered
              ? isCorrect
                ? "border-emerald-400 bg-emerald-50 text-emerald-600"
                : "border-rose-400 bg-rose-50 text-rose-600"
              : "border-purple-300 focus:border-purple-500 text-gray-800",
          ].join(" ")}
          animate={answered && !isCorrect ? { x: [0, -8, 8, -8, 8, 0] } : {}}
          transition={{ duration: 0.4 }}
        />

        {!answered && (
          <Button onClick={handleSubmit} disabled={!input.trim()}>
            こたえる！
          </Button>
        )}
      </div>
    </div>
  );
}
