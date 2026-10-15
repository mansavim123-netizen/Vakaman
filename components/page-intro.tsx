import type { ReactNode } from "react";

export default function PageIntro({ eyebrow, title, description, side }: { eyebrow: string; title: ReactNode; description: string; side?: ReactNode }) {
  return (
    <section className="page-intro shell">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {side ? <aside className="page-intro__side">{side}</aside> : null}
    </section>
  );
}
