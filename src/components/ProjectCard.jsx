import { memo } from "react";
import ProjectIcon from "./ProjectIcon";

function ProjectCard({ project }) {
  const { id, title, date, icon, description, tech, liveUrl, githubUrl } = project;

  return (
    <article className="group border border-line rounded-2xl overflow-hidden bg-ink-surface/60 hover:border-brass/40 transition-colors duration-300">
      {/* visual / hover-reveal area */}
      <div className="relative h-56 overflow-hidden blueprint-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-raised to-ink" />

        {/* resting state: icon + id */}
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95">
          <ProjectIcon name={icon} className="w-16 h-16 text-brass/80" />
          <span className="mt-3 font-mono text-[11px] text-paper-dim">{id}</span>
        </div>

        {/* hover reveal panel */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 bg-ink/95 opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-[13.5px] text-paper-muted leading-relaxed line-clamp-5">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="font-mono text-[10.5px] text-brass border border-brass/30 rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="font-mono text-[10.5px] text-paper-dim px-2 py-0.5">
                +{tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* static content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-[17px] text-paper leading-snug">
            {title}
          </h3>
          <span className="font-mono text-[11px] text-paper-dim whitespace-nowrap pt-1">
            {date}
          </span>
        </div>

        <ul className="mt-3 space-y-1.5">
          {project.bullets.slice(0, 2).map((b) => (
            <li key={b} className="text-[13px] text-paper-muted flex gap-2">
              <span className="text-brass-dim">–</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-4 font-mono text-[12.5px]">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-dim transition-colors duration-200"
            >
              Live demo
            </a>
          ) : (
            <span className="text-paper-dim/60 cursor-default">Live demo</span>
          )}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-muted hover:text-brass transition-colors duration-200"
            >
              Source
            </a>
          ) : (
            <span className="text-paper-dim/60 cursor-default">Source soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProjectCard);
