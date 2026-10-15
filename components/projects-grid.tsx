"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/project-card";
import { projects, projectCities } from "@/lib/projects";

export default function ProjectsGrid() {
  const [city, setCity] = useState<(typeof projectCities)[number]>("All places");
  const visibleProjects = useMemo(
    () => city === "All places" ? projects : projects.filter((project) => project.city === city),
    [city],
  );

  return (
    <div className="portfolio-grid-wrap">
      <div className="city-filter" role="group" aria-label="Filter portfolio by location">
        {projectCities.map((item) => (
          <button key={item} type="button" className={city === item ? "city-filter__item is-active" : "city-filter__item"} aria-pressed={city === item} onClick={() => setCity(item)}>
            {item}
          </button>
        ))}
      </div>
      <p className="portfolio-count" aria-live="polite">{String(visibleProjects.length).padStart(2, "0")} PROJECTS / {city.toUpperCase()}</p>
      <div className="project-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} index={projects.findIndex((item) => item.slug === project.slug)} />)}
      </div>
    </div>
  );
}
