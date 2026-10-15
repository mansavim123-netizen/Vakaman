import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/page-intro";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.name, description: project.name + " — Vakaman Developers portfolio, " + project.city + "." } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="project-detail-hero">
        <div className="shell project-detail-hero__inner">
          <Link className="back-link" href="/projects">← Back to portfolio</Link>
          <span className="eyebrow">{project.city} / Vakaman portfolio</span>
          <h1>{project.name}<br /><em>in perspective.</em></h1>
          <p>Project story, specifications and imagery will be added from approved client materials.</p>
          <div className="project-detail-hero__art" aria-hidden="true"><div className="project-detail-hero__plane project-detail-hero__plane--one" /><div className="project-detail-hero__plane project-detail-hero__plane--two" /><div className="project-detail-hero__plane project-detail-hero__plane--three" /></div>
        </div>
      </section>
      <section className="shell project-detail-body section-pad">
        <div><span className="eyebrow">01 / The place</span><h2>A closer look.</h2></div>
        <div><p>Every project has its own context, character and point of view. This page is structured for the approved narrative, renderings, location details, specifications and enquiry path.</p><Link className="button button--light" href="/contact">Enquire about this project <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="shell next-project"><span className="eyebrow">Continue exploring</span><Link href="/projects">Return to the portfolio ↗</Link></section>
    </>
  );
}
