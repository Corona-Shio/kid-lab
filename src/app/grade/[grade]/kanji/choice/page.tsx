import KanjiChoiceWrapper from "./KanjiChoiceWrapper";

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

interface Props { params: Promise<{ grade: string }> }

export default async function KanjiChoicePage({ params }: Props) {
  const { grade } = await params;

  return <KanjiChoiceWrapper gradeStr={grade} />;
}
