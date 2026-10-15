import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <>
      <PageIntro eyebrow="Journal / 07" title={<>Notes on place,<br /><em>form and permanence.</em></>} description="A future editorial space for considered stories about architecture, materials, context and the built environment." />
      <section className="shell journal-note section-pad"><div className="journal-note__mark">V.</div><div><span className="eyebrow">Editorial direction</span><h2>Thoughtful writing.<br /><em>Never filler.</em></h2><p>Articles will be published only when an editor has approved the topic, claims, imagery and attribution. This wireframe establishes the page structure, not finished editorial content.</p><Link className="text-link" href="/projects">Explore the portfolio ↗</Link></div></section>
    </>
  );
}
