"use client";

import KanjiChoiceContent from "./KanjiChoiceContent";

interface Props { params: Promise<{ grade: string }> }

export default function KanjiChoiceWrapper(props: Props) {
  return <KanjiChoiceContent {...props} />;
}
