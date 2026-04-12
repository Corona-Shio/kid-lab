"use client";

import dynamic from "next/dynamic";

const MathCalcContent = dynamic(() => import("./MathCalcContent"), { ssr: false });

export default function MathCalcClientWrapper({ gradeStr }: { gradeStr: string }) {
  return <MathCalcContent gradeStr={gradeStr} />;
}
