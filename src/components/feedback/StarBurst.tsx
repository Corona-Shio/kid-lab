"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const PARTICLES: Particle[] = [
  { id: 1, x: -42, y: -58, emoji: "⭐" },
  { id: 2, x: -18, y: -82, emoji: "✨" },
  { id: 3, x: 15, y: -74, emoji: "🌟" },
  { id: 4, x: 39, y: -52, emoji: "💫" },
  { id: 5, x: -48, y: -30, emoji: "🎉" },
  { id: 6, x: -8, y: -96, emoji: "⭐" },
  { id: 7, x: 28, y: -88, emoji: "✨" },
  { id: 8, x: 52, y: -34, emoji: "🌟" },
];

interface StarBurstProps {
  trigger: boolean;
}

export function StarBurst({ trigger }: StarBurstProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {(trigger ? PARTICLES : []).map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ opacity: 0, x: p.x * 3, y: p.y * 3, scale: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute text-3xl select-none"
          >
            {p.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
