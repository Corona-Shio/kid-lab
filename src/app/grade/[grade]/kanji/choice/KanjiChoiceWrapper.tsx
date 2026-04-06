"use client";

import KanjiChoiceContent from "./KanjiChoiceContent";

interface Props { gradeStr: string }

export default function KanjiChoiceWrapper(props: Props) {
  return <KanjiChoiceContent {...props} />;
}
