import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = { title: "Legacy" };

export default function LegacyPage() {
  return (
    <>
      <PageIntro eyebrow="The longer view / 02" title={<>A body of work.<br /><em>A lasting record.</em></>} description="A considered record of completed work, enduring standards and the places that become part of everyday life." />
      <section className="shell legacy-page-feature">
        <div className="legacy-page-feature__art" aria-hidden="true"><div /><div /><div /></div>
        <div><span className="eyebrow">A living archive</span><h2>Built work, held<br /><em>in perspective.</em></h2><p>Project completion and sold-out status must be confirmed by Vakaman before any individual work is presented as part of this archive.</p><Link className="text-link" href="/projects">Explore the portfolio ↗</Link></div>
      </section>
    </>
  );
}
