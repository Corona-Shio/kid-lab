"use client";

import dynamic from "next/dynamic";

const KanjiChoiceContent = dynamic(() => import("./KanjiChoiceContent"), { ssr: false });

interface Props { params: Promise<{ grade: string }> }

export default function KanjiChoiceWrapper(props: Props) {
  return <KanjiChoiceContent {...props} />;
}
