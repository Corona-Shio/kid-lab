"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { MathWordProblem } from "@/types/problem";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MATH_RUBY_DICTIONARY, renderRubyText } from "@/lib/ruby";

interface WordProblemProps {
  problem: MathWordProblem;
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  answered: boolean;
  isCorrect?: boolean;
}

export function WordProblem({
  problem,
  onAnswer,
  answered,
  isCorrect,
}: WordProblemProps) {
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!answered) {
      setInput("");
      setShowHint(false);
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
      <Card>
        <p className="text-xl font-bold text-gray-700 leading-relaxed">
          {renderRubyText(problem.text, MATH_RUBY_DICTIONARY)}
        </p>
      </Card>

      <Card variant={answered ? (isCorrect ? "success" : "error") : "highlight"}>
        <p className="text-xl font-bold text-orange-600 text-center">
          {renderRubyText(problem.question, MATH_RUBY_DICTIONARY)}
        </p>
      </Card>

      <div className="flex flex-col items-center gap-4">
        {problem.expression && !answered && (
          showHint ? (
            <p className="text-sm text-purple-400">
              しき: {problem.expression}
            </p>
          ) : (
            <button
              onClick={() => setShowHint(true)}
              className="text-sm text-purple-400 underline hover:text-purple-500 transition-colors"
            >
              ヒントをみる
            </button>
          )
        )}
        <div className="flex items-center gap-2">
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
              "w-28 h-16 text-3xl font-bold text-center rounded-2xl border-4 outline-none transition-all duration-200",
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
          <span className="text-xl font-bold text-gray-600">
            {problem.unit_label}
          </span>
        </div>

        {!answered && (
          <Button onClick={handleSubmit} disabled={!input.trim()}>
            こたえる！
          </Button>
        )}
      </div>
    </div>
  );
}
