"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { Card } from "@/components/ui/Card";
import { loadProgress } from "@/lib/storage";
import { buildKanjiPerformanceRows, buildWeakMathProblemRows } from "@/lib/progressStats";
import { calcAccuracy, calcStars } from "@/lib/scoring";
import { formatDate } from "@/lib/utils";
import type { Grade } from "@/types/problem";
import { GRADE_THEMES } from "@/types/common";
import { GRADE1_KANJI } from "@/data/kanji/grade1";
import { GRADE2_KANJI } from "@/data/kanji/grade2";
import { GRADE3_KANJI } from "@/data/kanji/grade3";

const GRADES: Grade[] = [1, 2, 3];
const KANJI_BY_GRADE = {
  1: GRADE1_KANJI,
  2: GRADE2_KANJI,
  3: GRADE3_KANJI,
} as const;

export default function ProgressPage() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1);
  const progress = loadProgress(selectedGrade);
  const kanjiRows = buildKanjiPerformanceRows(KANJI_BY_GRADE[selectedGrade], progress);
  const weakMathRows = buildWeakMathProblemRows(progress, 12);

  const accuracy = calcAccuracy(progress.sessions);
  const recentSessions = [...progress.sessions].reverse().slice(0, 10);

  const masteredCount = Object.values(progress.masteries).filter(
    (m) => m.level === "mastered",
  ).length;
  const totalTopics = Object.values(progress.masteries).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header title="📊 せいせき" showBack backHref="/" />
      <PageWrapper>
        {/* 学年タブ */}
        <div className="flex gap-2 mb-6 justify-center">
          {GRADES.map((g) => {
            const t = GRADE_THEMES[g];
            return (
              <motion.button
                key={g}
                onClick={() => setSelectedGrade(g)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className={[
                  "px-4 py-2 rounded-2xl font-bold text-base transition-all duration-200 border-2",
                  selectedGrade === g
                    ? `bg-gradient-to-br ${t.primary} text-white border-transparent shadow-lg`
                    : "bg-white text-gray-500 border-gray-200 hover:border-purple-200",
                ].join(" ")}
              >
                {t.emoji} {t.label}
              </motion.button>
            );
          })}
        </div>

        {/* サマリー */}
        <motion.div
          key={selectedGrade}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-3 mb-6"
        >
          <Card className="text-center">
            <p className="text-3xl font-bold text-purple-600">{progress.sessions.length}</p>
            <p className="text-xs text-gray-500 mt-1">セッション数</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-orange-500">{accuracy}%</p>
            <p className="text-xs text-gray-500 mt-1">せいかいりつ</p>
          </Card>
          <Card className="text-center">
            <p className="text-3xl font-bold text-yellow-500">⭐{progress.totalStars}</p>
            <p className="text-xs text-gray-500 mt-1">ごうけいほし</p>
          </Card>
        </motion.div>

        {/* 習熟度 */}
        {totalTopics > 0 && (
          <Card className="mb-6">
            <p className="font-bold text-gray-700 mb-3">📈 マスターじょうきょう</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden border-2 border-gray-200">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(masteredCount / totalTopics) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              <span className="text-sm font-bold text-gray-600">
                {masteredCount}/{totalTopics}
              </span>
            </div>
          </Card>
        )}

        <Card className="mb-6">
          <p className="font-bold text-gray-700 mb-3">🈶 かんじべつ せいせき</p>
          <div className="grid grid-cols-[minmax(0,1fr)_88px_88px] gap-2 px-2 pb-2 text-xs font-bold text-gray-500">
            <span>かんじ</span>
            <span className="text-right">かいとう</span>
            <span className="text-right">せいかいりつ</span>
          </div>
          <div className="max-h-80 overflow-y-auto pr-1">
            <div className="flex flex-col gap-1">
              {kanjiRows.map((row) => (
                <div
                  key={row.character}
                  className="grid grid-cols-[minmax(0,1fr)_88px_88px] items-center gap-2 rounded-xl border border-gray-100 px-2 py-1.5"
                >
                  <p className="text-xl font-bold text-gray-700">{row.character}</p>
                  <p className="text-right text-sm font-bold text-gray-600">{row.attempts}回</p>
                  <p className="text-right text-sm font-bold text-purple-600">
                    {row.accuracy === null ? "--" : `${row.accuracy}%`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="mb-6">
          <p className="font-bold text-gray-700 mb-3">🔢 さんすう まちがいメモ</p>
          {weakMathRows.length === 0 ? (
            <p className="text-sm text-gray-500">まだ まちがいきろく は ありません</p>
          ) : (
            <>
              <div className="grid grid-cols-[minmax(0,1fr)_70px_78px] gap-2 px-2 pb-2 text-xs font-bold text-gray-500">
                <span>もんだい</span>
                <span className="text-right">まちがい</span>
                <span className="text-right">せいかいりつ</span>
              </div>
              <div className="max-h-80 overflow-y-auto pr-1">
                <div className="flex flex-col gap-1">
                  {weakMathRows.map((row) => (
                    <div
                      key={row.problemKey}
                      className="grid grid-cols-[minmax(0,1fr)_70px_78px] items-center gap-2 rounded-xl border border-gray-100 px-2 py-1.5"
                    >
                      <p className="text-sm font-bold text-gray-700 leading-tight line-clamp-2">
                        {row.promptSummary}
                      </p>
                      <p className="text-right text-sm font-bold text-rose-500">
                        {row.incorrectFirstAttempts}回
                      </p>
                      <p className="text-right text-sm font-bold text-blue-600">{row.accuracy}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Card>

        {/* バッジ */}
        {progress.badges.length > 0 && (
          <div className="mb-6">
            <p className="font-bold text-gray-700 mb-3">🏅 バッジ</p>
            <div className="grid grid-cols-2 gap-2">
              {progress.badges.map((badge) => (
                <Badge
                  key={badge.id}
                  name={badge.name}
                  description={badge.description}
                  earned
                />
              ))}
            </div>
          </div>
        )}

        {/* 最近のセッション */}
        {recentSessions.length > 0 ? (
          <div>
            <p className="font-bold text-gray-700 mb-3">📝 さいきんのきろく</p>
            <div className="flex flex-col gap-2">
              {recentSessions.map((session, i) => {
                const stars = calcStars(session.correctCount, session.totalProblems);
                return (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-sm text-gray-700">
                            {session.subject === "kanji" ? "✏️ かんじ" : "🔢 さんすう"}
                            {"　"}
                            <span className="text-gray-400 text-xs">{session.mode}</span>
                          </p>
                          <p className="text-xs text-gray-400">
                            {formatDate(session.completedAt)}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <p className="text-sm font-bold text-purple-600">
                            {session.correctCount}/{session.totalProblems}もん
                          </p>
                          <StarRating stars={stars} />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <Card className="text-center py-10">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-gray-500 font-bold">まだきろくがありません</p>
            <p className="text-gray-400 text-sm mt-1">もんだいをといてみよう！</p>
          </Card>
        )}
      </PageWrapper>
    </div>
  );
}
