"use client";

import dynamic from "next/dynamic";

const UnitTestContent = dynamic(() => import("./UnitTestContent"), { ssr: false });

export default function UnitTestClientWrapper({ gradeStr }: { gradeStr: string }) {
  return <UnitTestContent gradeStr={gradeStr} />;
}
