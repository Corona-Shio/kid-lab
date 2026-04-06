"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
}

export function Header({
  title,
  showBack = false,
  backHref,
  onBack,
  rightSlot,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b-2 border-purple-100 shadow-sm">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
        {showBack && (
          backHref ? (
            <Link href={backHref}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 font-bold text-lg hover:bg-purple-200 transition-colors"
              >
                ←
              </motion.button>
            </Link>
          ) : (
            <motion.button
              onClick={onBack}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 font-bold text-lg hover:bg-purple-200 transition-colors"
            >
              ←
            </motion.button>
          )
        )}
        {title && (
          <h1 className="flex-1 font-bold text-xl text-gray-700 truncate">
            {title}
          </h1>
        )}
        {!title && <div className="flex-1" />}
        {rightSlot}
      </div>
    </header>
  );
}
