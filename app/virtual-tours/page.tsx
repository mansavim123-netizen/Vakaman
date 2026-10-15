import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = { title: "Virtual Tours" };

export default function VirtualToursPage() {
  return (
    <>
      <PageIntro eyebrow="Enter the architecture / 03" title={<>A different way<br /><em>to understand space.</em></>} description="A dedicated home for approved 3D models, immersive walkthroughs and spatial experiences." />
      <section className="shell tour-stage">
        <div className="tour-stage__frame"><div className="tour-stage__grid" /><div className="tour-stage__object"><div /><div /><div /></div><span className="eyebrow">Interactive experiences / In development</span><span className="tour-stage__number">00—01</span></div>
        <div className="tour-stage__footer"><p>The viewer will load only when a visitor chooses to enter. This keeps the main site quick and the immersive experience intentional.</p><Link className="button button--light" href="/projects">Discover the projects <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
