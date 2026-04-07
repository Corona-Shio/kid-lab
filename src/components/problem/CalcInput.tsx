"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MathCalcProblem } from "@/types/problem";
import { Card } from "@/components/ui/Card";

interface CalcInputProps {
  problem: MathCalcProblem;
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  answered: boolean;
  isCorrect?: boolean;
}

// 数字ボタンの色テーマ（行ごと）
const ROW_COLORS = [
  "from-violet-400 to-indigo-500", // 7, 8, 9
  "from-sky-400 to-cyan-500", // 4, 5, 6
  "from-emerald-400 to-teal-500", // 1, 2, 3
];

const ZERO_COLOR = "from-sky-400 to-cyan-500";
const DELETE_COLOR = "from-rose-400 to-pink-500";
const SUBMIT_COLOR = "from-orange-400 via-pink-500 to-purple-500";

export function CalcInput({
  problem,
  onAnswer,
  answered,
  isCorrect,
}: CalcInputProps) {
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!answered) {
      setInput("");
    }
  }, [problem.id, answered]);

  // 不正解時にシェイク
  useEffect(() => {
    if (answered && !isCorrect) {
      setShake(true);
      const t = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(t);
    }
  }, [answered, isCorrect]);

  function handleDigit(digit: string) {
    if (answered) return;
    // 最大4桁まで
    if (input.length >= 4) return;
    // 先頭の0を防ぐ（0単体はOK）
    if (input === "0") {
      setInput(digit);
      return;
    }
    setInput((prev) => prev + digit);
  }

  function handleDelete() {
    if (answered) return;
    setInput((prev) => prev.slice(0, -1));
  }

  function handleSubmit() {
    if (answered || !input) return;
    const userNum = parseInt(input, 10);
    const correct = !isNaN(userNum) && userNum === problem.answer;
    onAnswer(correct, input);
  }

  const displayValue = input || "?";

  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-sm mx-auto">
      {/* 問題カード */}
      <Card
        variant={answered ? (isCorrect ? "success" : "error") : "highlight"}
        className="p-4 sm:p-5"
      >
        <p className="text-[1.95rem] sm:text-4xl leading-tight font-bold text-center py-2 sm:py-3 text-gray-800 tracking-wide">
          {problem.expression} ={" "}
          <motion.span
            animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className={[
              "inline-block min-w-[2.5rem] sm:min-w-[3rem] px-2 rounded-xl",
              answered ? (isCorrect ? "text-emerald-600" : "text-rose-500") : "text-yellow-500",
            ].join(" ")}
          >
            {displayValue}
          </motion.span>
        </p>
        {answered && !isCorrect && (
          <p className="text-center text-sm sm:text-base text-gray-500 font-bold pb-1 sm:pb-2">
            せいかい:{" "}
            <span className="text-emerald-600 text-base sm:text-lg">{problem.answer}</span>
          </p>
        )}
      </Card>

      {/* 電卓パッド（回答前のみ表示） */}
      {!answered && (
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 px-0.5 sm:px-1">
          {/* 7, 8, 9 */}
          {["7", "8", "9"].map((d, i) => (
            <NumButton
              key={d}
              label={d}
              gradient={ROW_COLORS[0]}
              onPress={() => handleDigit(d)}
              delay={i * 0.03}
            />
          ))}
          {/* 4, 5, 6 */}
          {["4", "5", "6"].map((d, i) => (
            <NumButton
              key={d}
              label={d}
              gradient={ROW_COLORS[1]}
              onPress={() => handleDigit(d)}
              delay={i * 0.03}
            />
          ))}
          {/* 1, 2, 3 */}
          {["1", "2", "3"].map((d, i) => (
            <NumButton
              key={d}
              label={d}
              gradient={ROW_COLORS[2]}
              onPress={() => handleDigit(d)}
              delay={i * 0.03}
            />
          ))}
          {/* 最下行: ⌫, 0, こたえる */}
          <NumButton
            label="⌫"
            gradient={DELETE_COLOR}
            onPress={handleDelete}
            disabled={input.length === 0}
          />
          <NumButton
            label="0"
            gradient={ZERO_COLOR}
            onPress={() => handleDigit("0")}
          />
          <SubmitButton
            onPress={handleSubmit}
            disabled={!input}
            gradient={SUBMIT_COLOR}
          />
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------
// サブコンポーネント
// -------------------------------------------------------

interface NumButtonProps {
  label: string;
  gradient: string;
  onPress: () => void;
  disabled?: boolean;
  delay?: number;
}

function NumButton({ label, gradient, onPress, disabled = false, delay = 0 }: NumButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, delay }}
      whileTap={disabled ? {} : { scale: 0.88 }}
      onPointerDown={(e) => {
        e.preventDefault(); // スマホでのダブルタップズーム防止
        if (!disabled) onPress();
      }}
      disabled={disabled}
      className={[
        "relative h-14 sm:h-16 rounded-xl sm:rounded-2xl font-black text-[1.6rem] sm:text-2xl text-white select-none",
        "shadow-md active:shadow-sm transition-shadow duration-100",
        `bg-gradient-to-br ${gradient}`,
        disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      {/* ハイライト */}
      <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-xl sm:rounded-t-2xl" />
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}

interface SubmitButtonProps {
  onPress: () => void;
  disabled: boolean;
  gradient: string;
}

function SubmitButton({ onPress, disabled, gradient }: SubmitButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.06 }}
      whileTap={disabled ? {} : { scale: 0.88 }}
      onPointerDown={(e) => {
        e.preventDefault();
        if (!disabled) onPress();
      }}
      disabled={disabled}
      className={[
        "relative h-14 sm:h-16 rounded-xl sm:rounded-2xl font-black text-[0.95rem] sm:text-lg text-white select-none whitespace-nowrap tracking-tight",
        "shadow-md active:shadow-sm transition-all duration-100",
        `bg-gradient-to-br ${gradient}`,
        disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      <AnimatePresence>
        {!disabled && (
          <motion.span
            key="shine"
            className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </AnimatePresence>
      <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-xl sm:rounded-t-2xl" />
      <span className="relative z-10">こたえる！</span>
    </motion.button>
  );
}
