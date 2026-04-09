"use client";

import dynamic from "next/dynamic";

const MathWordContent = dynamic(() => import("./MathWordContent"), { ssr: false });

export default function MathWordClientWrapper({ gradeStr }: { gradeStr: string }) {
  return <MathWordContent gradeStr={gradeStr} />;
}
