import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import ProjectsGrid from "@/components/projects-grid";

export const metadata: Metadata = { title: "Portfolio" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="The portfolio / 01" title={<>A collection of<br /><em>places and perspectives.</em></>} description="Explore the Vakaman portfolio by place. Project details and approved imagery will be completed from client-supplied material." />
      <section className="shell inner-page-section"><ProjectsGrid /></section>
    </>
  );
}
