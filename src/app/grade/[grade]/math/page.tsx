import MathMenuContent from "./MathMenuContent";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default async function MathMenuPage({ params }: Props) {
  const { grade } = await params;

  return <MathMenuContent gradeStr={grade} />;
}
