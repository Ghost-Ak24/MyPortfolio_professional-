import { memo } from "react";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-line bg-ink-surface/40">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display font-semibold text-3xl text-paper mb-3">
          Skills &amp; Tools
        </h2>
        <p className="text-paper-muted max-w-[56ch] mb-12">
          The stack I reach for most, grouped by where it sits in a project.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="border border-line rounded-xl p-5 hover:border-brass/40 transition-colors duration-200"
            >
              <h3 className="font-mono text-[12px] text-brass mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] text-paper-muted bg-ink border border-line rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Skills);
