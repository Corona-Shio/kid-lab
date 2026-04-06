import KanjiFillContent from "./KanjiFillContent";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default async function KanjiFillPage({ params }: Props) {
  const { grade } = await params;

  return <KanjiFillContent gradeStr={grade} />;
}
