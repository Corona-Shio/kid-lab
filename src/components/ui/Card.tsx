"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "highlight" | "success" | "error";
}

const variantClasses = {
  default: "bg-white border-2 border-transparent shadow-lg shadow-purple-100/50",
  highlight:
    "bg-white border-2 border-yellow-300 shadow-xl shadow-yellow-200/60 ring-4 ring-yellow-100",
  success:
    "bg-emerald-50 border-2 border-emerald-300 shadow-lg shadow-emerald-100/60",
  error: "bg-rose-50 border-2 border-rose-300 shadow-lg shadow-rose-100/60",
};

export function Card({
  children,
  className = "",
  onClick,
  variant = "default",
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02, y: -3 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={[
        "rounded-3xl p-5",
        variantClasses[variant],
        onClick ? "cursor-pointer select-none" : "",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}
