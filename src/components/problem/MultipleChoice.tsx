"use client";

import { Fragment, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { KanjiChoiceProblem } from "@/types/problem";
import { Card } from "@/components/ui/Card";
import type { RubyTerm } from "@/lib/ruby";
import { renderRubyTextWithHiddenTerm } from "@/lib/ruby";

interface MultipleChoiceProps {
  problem: KanjiChoiceProblem;
  rubyDictionary: RubyTerm[];
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  answered: boolean;
}

export function MultipleChoice({
  problem,
  rubyDictionary,
  onAnswer,
  answered,
}: MultipleChoiceProps) {
  const [selected, setSelected] = useState<number | null>(null);

  function toKatakana(text: string): string {
    return text.replace(/[ぁ-ん]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
  }

  function handleSelect(index: number) {
    if (answered) return;
    setSelected(index);
    const correct = index === problem.answerIndex;
    onAnswer(correct, problem.choices[index]);
  }

  const questionText = useMemo(() => {
    if (problem.mode === "character") {
      const readingInKatakana = toKatakana(problem.targetReading);
      const sentenceNodes = renderRubyTextWithHiddenTerm(
        problem.sentence,
        rubyDictionary,
        { term: problem.character, reading: problem.targetReading },
        (_text, key) => <Fragment key={key}>{readingInKatakana}</Fragment>,
      );

      return (
        <>
          「{sentenceNodes}」の「{readingInKatakana}」にあうかんじはどれ？
        </>
      );
    }

    const sentenceNodes = renderRubyTextWithHiddenTerm(
      problem.sentence,
      rubyDictionary,
      { term: problem.character, reading: problem.targetReading },
    );

    return (
      <>
        「{sentenceNodes}」の「{problem.character}」のよみかたはどれ？
      </>
    );
  }, [problem, rubyDictionary]);

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <p className="text-2xl font-bold text-gray-700 text-center py-2">{questionText}</p>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {problem.choices.map((choice, i) => (
          <motion.button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={answered}
            whileHover={answered ? {} : { scale: 1.04, y: -2 }}
            whileTap={answered ? {} : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className={[
              "min-h-[80px] rounded-3xl border-4 font-bold text-3xl shadow transition-all duration-200",
              answered
                ? i === problem.answerIndex
                  ? "bg-emerald-50 border-emerald-400 text-emerald-700 shadow-emerald-200"
                  : i === selected
                  ? "bg-rose-50 border-rose-400 text-rose-600 shadow-rose-200"
                  : "bg-white border-gray-200 text-gray-400"
                : "bg-white border-purple-200 text-gray-700 hover:border-purple-400 hover:shadow-purple-200 shadow-purple-100 cursor-pointer",
            ].join(" ")}
          >
            {choice}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
