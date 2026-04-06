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
      <Card variant={answered ? (isCorrect ? "success" : "error") : "default"}>
        <p className="text-2xl font-bold text-gray-700 leading-relaxed text-center py-2">
          {problem.sentence}
        </p>
        {problem.hint && !answered && (
          <p className="text-sm text-purple-400 text-center mt-2">
            ヒント: {problem.hint}
          </p>
        )}
      </Card>

      <div className="flex flex-col items-center gap-4">
        <motion.input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => !answered && setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          disabled={answered}
          maxLength={1}
          placeholder="□"
          className={[
            "w-20 h-20 text-4xl font-bold text-center rounded-2xl border-4 outline-none transition-all duration-200",
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
