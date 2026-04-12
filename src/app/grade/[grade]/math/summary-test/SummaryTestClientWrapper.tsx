"use client";

import dynamic from "next/dynamic";

const SummaryTestContent = dynamic(() => import("./SummaryTestContent"), { ssr: false });

export default function SummaryTestClientWrapper({ gradeStr }: { gradeStr: string }) {
  return <SummaryTestContent gradeStr={gradeStr} />;
}
