import GradeContent from "./GradeContent";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default function GradePage(props: Props) {
  return <GradeContent {...props} />;
}
