import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-line bg-ink-surface/40">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-paper mb-5">
            Let's build something reliable together.
          </h2>
          <p className="text-paper-muted text-[15.5px] leading-relaxed mb-10">
            I'm currently looking for SDE opportunities. If you have a role, a
            project, or just want to talk backend architecture, my inbox is
            open.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="bg-brass text-ink font-mono text-sm font-medium px-6 py-3 rounded-full hover:bg-brass-bright transition-colors duration-200"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="border border-line text-paper font-mono text-sm px-6 py-3 rounded-full hover:border-brass/60 hover:text-brass transition-colors duration-200"
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
