import { useEffect, useState, useCallback } from "react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
    setOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "top")}
          className="font-display font-semibold text-lg tracking-tight text-paper"
        >
          Aditya<span className="text-brass">.</span>Kapoor
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3 py-2 rounded-full transition-colors duration-200 ${
                  activeId === item.id
                    ? "text-brass"
                    : "text-paper-muted hover:text-paper"
                }`}
              >
                <span className="text-brass-dim mr-1 text-[11px]">
                  0{idx + 1}
                </span>
                {item.label}
                {activeId === item.id && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-brass rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Aditya_Kapoor_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-brass/50 text-brass text-[13px] font-mono px-4 py-2 rounded-full hover:bg-brass hover:text-ink transition-colors duration-200"
        >
          Resume
        </a>

        <button
          className="md:hidden text-paper p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d={open ? "M5 5 L17 17 M17 5 L5 17" : "M3 6 H19 M3 11 H19 M3 16 H19"}
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col bg-ink-surface bg-ink border-t border-line px-6 py-4 gap-1 font-mono text-sm">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block py-2 ${
                  activeId === item.id ? "text-brass" : "text-paper-muted"
                }`}
              >
                <span className="text-brass-dim mr-2 text-[11px]">0{idx + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Aditya_Kapoor_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-brass"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
