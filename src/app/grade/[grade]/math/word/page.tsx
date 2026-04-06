import MathWordContent from "./MathWordContent";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default function MathWordPage(props: Props) {
  return <MathWordContent {...props} />;
}
