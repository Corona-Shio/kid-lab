"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { MathCalcProblem } from "@/types/problem";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface CalcInputProps {
  problem: MathCalcProblem;
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  answered: boolean;
  isCorrect?: boolean;
}

export function CalcInput({
  problem,
  onAnswer,
  answered,
  isCorrect,
}: CalcInputProps) {
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
    const userNum = parseInt(input.trim(), 10);
    const correct = !isNaN(userNum) && userNum === problem.answer;
    onAnswer(correct, input.trim());
  }

  return (
    <div className="flex flex-col gap-5">
      <Card variant={answered ? (isCorrect ? "success" : "error") : "highlight"}>
        <p className="text-5xl font-bold text-center py-4 text-gray-800 tracking-wide">
          {problem.expression} = ?
        </p>
      </Card>

      <div className="flex flex-col items-center gap-4">
        <motion.input
          ref={inputRef}
          type="number"
          inputMode="numeric"
          value={input}
          onChange={(e) => !answered && setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          disabled={answered}
          placeholder="?"
          className={[
            "w-32 h-20 text-4xl font-bold text-center rounded-2xl border-4 outline-none transition-all duration-200",
            "bg-white shadow-inner",
            answered
              ? isCorrect
                ? "border-emerald-400 bg-emerald-50 text-emerald-600"
                : "border-rose-400 bg-rose-50 text-rose-600"
              : "border-yellow-300 focus:border-yellow-500 text-gray-800",
          ].join(" ")}
          animate={answered && !isCorrect ? { x: [0, -8, 8, -8, 8, 0] } : {}}
          transition={{ duration: 0.4 }}
        />

        {!answered && (
          <Button onClick={handleSubmit} disabled={!input.trim()}>
            こたえる！
          </Button>
        )}

        {answered && !isCorrect && (
          <p className="text-lg text-gray-600 font-bold">
            せいかい: <span className="text-emerald-600">{problem.answer}</span>
          </p>
        )}
      </div>
    </div>
  );
}
