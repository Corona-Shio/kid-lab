"use client";

import { motion } from "framer-motion";

interface StarRatingProps {
  stars: number; // 0-3
  animate?: boolean;
}

export function StarRating({ stars, animate = false }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => {
        const filled = i < stars;
        return (
          <motion.span
            key={i}
            initial={animate ? { scale: 0, rotate: -30 } : false}
            animate={animate ? { scale: 1, rotate: 0 } : {}}
            transition={
              animate
                ? { type: "spring", stiffness: 600, damping: 15, delay: i * 0.15 }
                : {}
            }
            className={[
              "text-4xl select-none drop-shadow-sm",
              filled ? "filter-none" : "grayscale opacity-30",
            ].join(" ")}
          >
            ⭐
          </motion.span>
        );
      })}
    </div>
  );
}
