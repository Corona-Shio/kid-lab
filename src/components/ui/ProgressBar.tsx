"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-end items-center mb-1.5">
        <span className="text-sm font-bold text-purple-600">
          {current} / {total} もん
        </span>
      </div>
      <div className="relative h-5 rounded-full bg-gray-100 border-2 border-gray-200 overflow-hidden shadow-inner">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full pointer-events-none" />
      </div>
    </div>
  );
}
