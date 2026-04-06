import MathMenuContent from "./MathMenuContent";

interface Props { params: Promise<{ grade: string }> }

export function generateStaticParams() {
  return [{ grade: "1" }, { grade: "2" }, { grade: "3" }];
}

export default function MathMenuPage(props: Props) {
  return <MathMenuContent {...props} />;
}
