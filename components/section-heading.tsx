import type { ReactNode } from "react";

type Props = { eyebrow: string; title: ReactNode; description?: string; className?: string };

export default function SectionHeading({ eyebrow, title, description, className = "" }: Props) {
  return (
    <div className={"section-heading " + className}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
