import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <>
      <PageIntro eyebrow="Press / 06" title={<>The conversation<br /><em>around the work.</em></>} description="A home for approved media notes, company announcements and press enquiries." />
      <section className="shell empty-editorial section-pad"><span className="eyebrow">Media enquiries</span><h2>For press and editorial<br />conversations.</h2><p>Press contact details, publications, awards and announcements must be sourced from client-approved material. Nothing has been fabricated for this wireframe.</p><Link className="button button--outline" href="/contact">Make an enquiry ↗</Link></section>
    </>
  );
}
