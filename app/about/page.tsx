import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = { title: "Our Perspective" };

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Our perspective / 04" title={<>The built world<br /><em>deserves intention.</em></>} description="An introduction to the principles, people and perspective behind Vakaman Developers." />
      <section className="shell about-statement section-pad">
        <span className="eyebrow">The principle</span>
        <div><h2>Good architecture is not a moment of attention. It is a relationship with time.</h2><p>This is proposed brand-direction copy, not a company-history claim. Company history, director biographies and Surabhi Group details must be supplied and approved by the client before publication.</p></div>
      </section>
      <section className="about-values"><div className="shell principle-grid">
        <article className="principle-card"><span className="principle-card__index">01</span><div className="principle-card__line" /><h3>Judgement</h3><p>Clarity before ornament. Intent before gesture.</p></article>
        <article className="principle-card"><span className="principle-card__index">02</span><div className="principle-card__line" /><h3>Context</h3><p>Every setting asks a different question.</p></article>
        <article className="principle-card"><span className="principle-card__index">03</span><div className="principle-card__line" /><h3>Permanence</h3><p>The decisions that matter are the ones that last.</p></article>
      </div></section>
      <section className="shell about-cta"><p>For a closer conversation about the work and the people behind it.</p><Link className="button button--light" href="/contact">Contact Vakaman ↗</Link></section>
    </>
  );
}
