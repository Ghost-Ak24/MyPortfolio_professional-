import { memo } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display font-semibold text-3xl text-paper mb-3">
          Projects
        </h2>
        <p className="text-paper-muted max-w-[56ch] mb-12">
          Hover a project to see the stack and details. More repos are on the way —
          links will light up as they're added.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
