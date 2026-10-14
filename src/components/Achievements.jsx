import { memo } from "react";
import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display font-semibold text-3xl text-paper mb-12">
          Achievements
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="border border-line rounded-xl p-6 hover:border-brass/40 transition-colors duration-200"
            >
              <h3 className="font-display font-semibold text-[17px] text-paper mb-2">
                {item.title}
              </h3>
              <p className="text-paper-muted text-[14px] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Achievements);
