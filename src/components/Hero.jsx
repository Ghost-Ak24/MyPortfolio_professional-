import { profile } from "../data/profile";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden blueprint-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink pointer-events-none" />

      <div className="relative max-w-content mx-auto w-full px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <p className="font-mono text-sm text-brass mb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-teal align-middle mr-2 animate-blink" />
            Available for SDE roles
          </p>

          <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl text-paper">
            Building backend
            <br />
            systems that hold
            <br />
            up under load.
          </h1>

          <p className="mt-6 max-w-[52ch] text-paper-muted text-[16px] leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brass text-ink font-mono text-sm font-medium px-6 py-3 rounded-full hover:bg-brass-bright transition-colors duration-200"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-line text-paper font-mono text-sm px-6 py-3 rounded-full hover:border-brass/60 hover:text-brass transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-line pt-6">
            <div>
              <dt className="font-mono text-[11px] text-paper-dim">DSA solved</dt>
              <dd className="font-display text-2xl text-paper mt-1">400+</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-paper-dim">REST APIs shipped</dt>
              <dd className="font-display text-2xl text-paper mt-1">10+</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] text-paper-dim">Concurrent chat users</dt>
              <dd className="font-display text-2xl text-paper mt-1">100+</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto md:mx-0 w-full max-w-[340px]">
          <div className="absolute -inset-3 border border-line rounded-2xl corner-bracket" />
          <div className="relative rounded-2xl overflow-hidden border border-line">
            <img
              src={profileImg}
              alt="Portrait of Aditya Kapoor"
              className="w-full h-full object-cover grayscale-[15%]"
              loading="eager"
              width={340}
              height={420}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-mono text-[11px] text-paper-muted">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
