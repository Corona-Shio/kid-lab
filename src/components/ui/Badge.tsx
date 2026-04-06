"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  name: string;
  description: string;
  earned: boolean;
}

export function Badge({ name, description, earned }: BadgeProps) {
  return (
    <motion.div
      whileHover={earned ? { scale: 1.05 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={[
        "flex items-center gap-3 rounded-2xl p-3 border-2 shadow",
        earned
          ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-yellow-200/60 ring-2 ring-yellow-100"
          : "bg-gray-50 border-gray-200 opacity-50 grayscale",
      ].join(" ")}
    >
      <span className="text-3xl select-none">🏅</span>
      <div>
        <p className="font-bold text-sm text-gray-800 leading-tight">{name}</p>
        <p className="text-xs text-gray-500 leading-tight">{description}</p>
      </div>
    </motion.div>
  );
}
