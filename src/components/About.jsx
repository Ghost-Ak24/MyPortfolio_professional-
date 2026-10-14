import { profile } from "../data/profile";

const PROFILE_LINKS = [
  { label: "GitHub", href: profile.links.github, handle: "Ghost-Ak24" },
  { label: "LinkedIn", href: profile.links.linkedin, handle: "aditya-k-4883353b9" },
  { label: "LeetCode", href: profile.links.leetcode, handle: "ghostX24" },
  { label: "Codeforces", href: profile.links.codeforces, handle: "aditya2408" },
  { label: "GeeksforGeeks", href: profile.links.gfg, handle: "ghostx24" },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[0.55fr_0.45fr] gap-16">
        <div>
          <h2 className="font-display font-semibold text-3xl text-paper mb-6">
            About
          </h2>
          <div className="space-y-5 text-paper-muted leading-relaxed text-[15.5px] max-w-[58ch]">
            <p>
              I'm a Computer Science undergraduate at Chandigarh University, placed in the
              Kargil Batch — the top 5% of the university, selected on coding ability. Most
              of my work sits on the backend: designing APIs, modeling data, and getting
              authentication and authorization right, then pairing that with a React
              frontend that stays out of the way.
            </p>
            <p>
              I spend a lot of time on data structures and algorithms — 400+ problems
              solved across LeetCode and GeeksforGeeks — because it keeps my instincts for
              performance and correctness sharp when I'm writing production code. Outside
              coursework, I've published research at CSR 2026 and placed in a couple of
              hackathons and competitions along the way.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-[13px] max-w-md">
            <div className="flex justify-between border-b border-line py-2">
              <span className="text-paper-dim">Location</span>
              <span className="text-paper">{profile.location}</span>
            </div>
            <div className="flex justify-between border-b border-line py-2">
              <span className="text-paper-dim">Email</span>
              <a href={`mailto:${profile.email}`} className="text-paper hover:text-brass">
                Contact
              </a>
            </div>
            <div className="flex justify-between border-b border-line py-2">
              <span className="text-paper-dim">Phone</span>
              <a href={`tel:${profile.phone}`} className="text-paper hover:text-brass">
                {profile.phone}
              </a>
            </div>
            <div className="flex justify-between border-b border-line py-2">
              <span className="text-paper-dim">Status</span>
              <span className="text-teal">Open to work</span>
            </div>
          </div>
        </div>

        <div className="bg-ink-surface border border-line rounded-2xl p-6 h-fit">
          <p className="font-mono text-[11px] text-paper-dim mb-4">Find me elsewhere</p>
          <ul className="space-y-1">
            {PROFILE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-line last:border-b-0 transition-colors duration-200"
                >
                  <span className="text-paper group-hover:text-brass transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="font-mono text-[12px] text-paper-dim group-hover:text-paper-muted transition-colors duration-200">
                    {link.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
