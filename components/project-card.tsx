import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={"project-card project-card--tone-" + ((index % 3) + 1)}>
      <Link href={"/projects/" + project.slug} className="project-card__link" aria-label={"Explore " + project.name + ", " + project.city}>
        <div className="project-card__art" aria-hidden="true">
          <div className="project-card__plane project-card__plane--back" />
          <div className="project-card__plane project-card__plane--main" />
          <div className="project-card__plane project-card__plane--side" />
          <span className="project-card__art-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-card__art-caption">ARCHITECTURAL STUDY</span>
        </div>
        <div className="project-card__meta">
          <div><span className="eyebrow">{project.city}</span><h3>{project.name}</h3></div>
          <span className="project-card__arrow" aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  );
}
