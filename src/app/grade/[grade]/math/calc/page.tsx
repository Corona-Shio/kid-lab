import MathCalcClientWrapper from "./MathCalcClientWrapper";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default async function MathCalcPage({ params }: Props) {
  const { grade } = await params;

  return <MathCalcClientWrapper gradeStr={grade} />;
}
