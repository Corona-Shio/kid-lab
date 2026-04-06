"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const grades = [
  {
    grade: 1,
    emoji: "🌸",
    label: "1ねんせい",
    description: "たしざん・ひきざん\nかんじ80もじ",
    gradient: "from-pink-400 via-rose-400 to-pink-500",
    shadow: "shadow-pink-300/60",
    ring: "ring-pink-200",
    href: "/grade/1",
  },
  {
    grade: 2,
    emoji: "⭐",
    label: "2ねんせい",
    description: "かけざん・わりざん\nかんじ160もじ",
    gradient: "from-sky-400 via-blue-400 to-sky-500",
    shadow: "shadow-sky-300/60",
    ring: "ring-sky-200",
    href: "/grade/2",
  },
  {
    grade: 3,
    emoji: "🌿",
    label: "3ねんせい",
    description: "九九・大きなかず\nかんじ200もじ",
    gradient: "from-emerald-400 via-green-400 to-emerald-500",
    shadow: "shadow-emerald-300/60",
    ring: "ring-emerald-200",
    href: "/grade/3",
  },
];

const floatingDots = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: [16, 20, 12, 24, 18][i % 5],
  left: `${(i * 7.3 + 3) % 95}%`,
  top: `${(i * 11.7 + 5) % 88}%`,
  delay: `${(i * 0.4) % 2.8}s`,
  duration: `${3.2 + (i % 4) * 0.5}s`,
  color: [
    "bg-pink-300/40",
    "bg-sky-300/40",
    "bg-emerald-300/40",
    "bg-yellow-300/40",
    "bg-purple-300/40",
  ][i % 5],
}));

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start py-10 px-4"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, #fce7f3 0%, transparent 50%), radial-gradient(ellipse at 80% 15%, #e0f2fe 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, #d1fae5 0%, transparent 50%), #faf9ff",
      }}
    >
      {/* floating decorative dots */}
      {floatingDots.map((dot) => (
        <span
          key={dot.id}
          className={`pointer-events-none absolute rounded-full ${dot.color}`}
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.left,
            top: dot.top,
            animation: `float ${dot.duration} ease-in-out ${dot.delay} infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          from { transform: translateY(0px) rotate(0deg); }
          to   { transform: translateY(-18px) rotate(10deg); }
        }
      `}</style>

      {/* title area */}
      <motion.div
        className="relative z-10 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1
          className="text-5xl sm:text-6xl font-bold text-gray-800 mb-3 leading-tight"
          style={{ fontFamily: "var(--font-kaisei-decol)" }}
        >
          きっずらぼ 📚
        </h1>
        <p
          className="text-lg text-gray-500 leading-relaxed"
          style={{ fontFamily: "var(--font-kosugi-maru)" }}
        >
          かんじ・さんすうを
          <br />
          たのしくおぼえよう！
        </p>

        <svg className="mx-auto mt-3" width="160" height="12" viewBox="0 0 160 12" fill="none">
          <path
            d="M2 8 C 22 2, 42 12, 62 6 S 102 2, 122 8 S 148 12, 158 6"
            stroke="#f9a8d4"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* grade cards */}
      <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
        {grades.map((g, i) => (
          <motion.div
            key={g.grade}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.13, ease: "easeOut" }}
          >
            <Link href={g.href} className="block">
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className={[
                  "relative overflow-hidden rounded-3xl shadow-xl",
                  g.shadow,
                  "ring-4",
                  g.ring,
                  "min-h-[100px] flex items-center gap-5 px-6 py-5",
                  `bg-gradient-to-br ${g.gradient}`,
                  "cursor-pointer select-none",
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10" />

                <span className="text-5xl relative z-10 drop-shadow">{g.emoji}</span>
                <div className="relative z-10">
                  <p
                    className="text-2xl font-bold text-white leading-tight drop-shadow"
                    style={{ fontFamily: "var(--font-kaisei-decol)" }}
                  >
                    {g.label}
                  </p>
                  <p className="text-sm text-white/90 mt-0.5 leading-snug whitespace-pre-line">
                    {g.description}
                  </p>
                </div>
                <span className="ml-auto text-white/80 text-2xl relative z-10">▶</span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* progress link */}
      <motion.div
        className="relative z-10 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link href="/progress">
          <motion.span
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/80 shadow border-2 border-purple-100 text-purple-600 font-bold text-base cursor-pointer hover:bg-white transition-colors"
          >
            📊 せいせきをみる
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
