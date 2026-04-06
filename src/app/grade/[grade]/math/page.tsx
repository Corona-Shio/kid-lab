"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { PageWrapper } from "@/components/layout/PageWrapper";
import type { Grade } from "@/types/problem";
import { GRADE_THEMES } from "@/types/common";

interface Params { grade: string }

export default function MathMenuPage({ params }: { params: Promise<Params> }) {
  const { grade: gradeStr } = use(params);
  const grade = parseInt(gradeStr, 10) as Grade;
  const theme = GRADE_THEMES[grade] ?? GRADE_THEMES[1];

  const modes = [
    {
      label: "けいさんもんだい",
      emoji: "➕",
      description: "しきをといてみよう",
      href: `/grade/${grade}/math/calc`,
      gradient: "from-cyan-400 to-sky-500",
    },
    {
      label: "ぶんしょうもんだい",
      emoji: "📖",
      description: "おはなしをよんでとこう",
      href: `/grade/${grade}/math/word`,
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      label: "たんげんテスト",
      emoji: "📋",
      description: "たんげんごとにテストしよう",
      href: `/grade/${grade}/math/unit-test`,
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      label: "まとめテスト",
      emoji: "🏆",
      description: "ぜんぶのたんげんをテスト",
      href: `/grade/${grade}/math/summary-test`,
      gradient: "from-purple-400 to-violet-500",
    },
  ];

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <Header title="🔢 さんすう" showBack backHref={`/grade/${grade}`} />
      <PageWrapper>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-700 text-center mb-8"
          style={{ fontFamily: "var(--font-kaisei-decol)" }}
        >
          どんなもんだいにする？
        </motion.h2>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {modes.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.1 }}
            >
              <Link href={m.href} className="block">
                <motion.div
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={[
                    `bg-gradient-to-br ${m.gradient}`,
                    "rounded-3xl shadow-lg min-h-[90px] flex items-center gap-4 px-6 py-4",
                    "cursor-pointer select-none relative overflow-hidden",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 bg-white/20 pointer-events-none" />
                  <span className="text-4xl relative z-10">{m.emoji}</span>
                  <div className="relative z-10">
                    <p
                      className="text-xl font-bold text-white drop-shadow"
                      style={{ fontFamily: "var(--font-kaisei-decol)" }}
                    >
                      {m.label}
                    </p>
                    <p className="text-xs text-white/90 mt-0.5">{m.description}</p>
                  </div>
                  <span className="ml-auto text-white/80 text-xl relative z-10">▶</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
