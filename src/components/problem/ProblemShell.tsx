"use client";

import { ReactNode } from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Header } from "@/components/layout/Header";

interface ProblemShellProps {
  title: string;
  current: number;
  total: number;
  children: ReactNode;
  onQuit?: () => void;
}

export function ProblemShell({
  title,
  current,
  total,
  children,
  onQuit,
}: ProblemShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col">
      <Header
        title={title}
        showBack={!!onQuit}
        onBack={onQuit}
        rightSlot={
          <span className="text-sm font-bold text-purple-400">
            {current}/{total}
          </span>
        }
      />
      <div className="px-4 pt-3 pb-1 max-w-2xl mx-auto w-full">
        <ProgressBar current={current} total={total} />
      </div>
      <div className="flex-1 px-4 pt-4 pb-8 max-w-2xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
