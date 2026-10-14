import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] text-paper-dim">
        <p>© {year} {profile.name}</p>
        <div className="flex items-center gap-5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors duration-200">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors duration-200">
            LinkedIn
          </a>
          <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors duration-200">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
