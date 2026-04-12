import UnitTestClientWrapper from "./UnitTestClientWrapper";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default async function UnitTestPage({ params }: Props) {
  const { grade } = await params;

  return <UnitTestClientWrapper gradeStr={grade} />;
}
