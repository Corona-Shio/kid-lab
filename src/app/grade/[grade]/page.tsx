"use client";

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { PageWrapper } from "@/components/layout/PageWrapper";
import type { Grade } from "@/types/problem";
import { GRADE_THEMES } from "@/types/common";

interface Params { grade: string }

export default function GradePage({ params }: { params: Promise<Params> }) {
  const { grade: gradeStr } = use(params);
  const grade = parseInt(gradeStr, 10) as Grade;
  const theme = GRADE_THEMES[grade] ?? GRADE_THEMES[1];

  const subjects = [
    {
      label: "かんじ",
      emoji: "✏️",
      description: "かんじをおぼえよう！",
      href: `/grade/${grade}/kanji`,
      gradient: "from-orange-400 to-amber-500",
      shadow: "shadow-orange-200",
    },
    {
      label: "さんすう",
      emoji: "🔢",
      description: "けいさんをれんしゅうしよう！",
      href: `/grade/${grade}/math`,
      gradient: "from-blue-400 to-indigo-500",
      shadow: "shadow-blue-200",
    },
  ];

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <Header title={`${theme.emoji} ${theme.label}`} showBack backHref="/" />
      <PageWrapper>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-700 text-center mb-8"
          style={{ fontFamily: "var(--font-kaisei-decol)" }}
        >
          なにをべんきょうする？
        </motion.h2>

        <div className="flex flex-col gap-5 max-w-sm mx-auto">
          {subjects.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.4, ease: "easeOut" }}
            >
              <Link href={s.href} className="block">
                <motion.div
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className={[
                    `bg-gradient-to-br ${s.gradient}`,
                    "rounded-3xl shadow-xl",
                    s.shadow,
                    "min-h-[120px] flex items-center gap-5 px-7 py-6",
                    "cursor-pointer select-none relative overflow-hidden",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 bg-white/20 from-white/30 to-transparent pointer-events-none" />
                  <span className="text-5xl relative z-10">{s.emoji}</span>
                  <div className="relative z-10">
                    <p
                      className="text-3xl font-bold text-white drop-shadow"
                      style={{ fontFamily: "var(--font-kaisei-decol)" }}
                    >
                      {s.label}
                    </p>
                    <p className="text-sm text-white/90 mt-1">{s.description}</p>
                  </div>
                  <span className="ml-auto text-white/80 text-2xl relative z-10">▶</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
