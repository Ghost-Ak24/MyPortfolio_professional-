import { memo } from "react";
import { education } from "../data/education";

function Education() {
  return (
    <section id="education" className="py-28 border-t border-line bg-ink-surface/40">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display font-semibold text-3xl text-paper mb-12">
          Education
        </h2>

        <div className="max-w-2xl">
          {education.map((item, idx) => (
            <div
              key={item.school}
              className="relative pl-8 pb-10 last:pb-0 border-l border-line last:border-transparent"
            >
              <span className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-brass" />
              <p className="font-mono text-[11px] text-paper-dim mb-1">{item.period}</p>
              <h3 className="font-display font-semibold text-lg text-paper">
                {item.school}
              </h3>
              <p className="text-paper-muted text-[14.5px] mt-1">{item.credential}</p>
              <p className="font-mono text-[12.5px] text-paper-dim mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Education);
