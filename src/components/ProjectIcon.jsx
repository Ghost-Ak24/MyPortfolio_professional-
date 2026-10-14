const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const icons = {
  marketplace: (
    <>
      <path d="M20 36 L24 20 H56 L60 36" {...strokeProps} />
      <rect x="18" y="36" width="44" height="26" rx="2" {...strokeProps} />
      <path d="M28 36 V30 a12 12 0 0 1 24 0 V36" {...strokeProps} />
      <circle cx="40" cy="48" r="6" {...strokeProps} />
      <path d="M37 48 h6" {...strokeProps} />
    </>
  ),
  chat: (
    <>
      <rect x="14" y="18" width="36" height="26" rx="4" {...strokeProps} />
      <path d="M22 44 L18 52 L32 44" {...strokeProps} />
      <rect x="30" y="30" width="36" height="26" rx="4" {...strokeProps} />
      <path d="M58 56 L62 64 L48 56" {...strokeProps} />
      <path d="M21 27 H43 M21 33 H37" {...strokeProps} />
    </>
  ),
  weather: (
    <>
      <circle cx="30" cy="28" r="10" {...strokeProps} />
      <path d="M30 12 V16 M30 40 V44 M46 28 H42 M18 28 H14 M41.3 16.7 L38.5 19.5 M21.5 36.5 L18.7 39.3 M41.3 39.3 L38.5 36.5 M21.5 19.5 L18.7 16.7" {...strokeProps} />
      <path d="M26 54 a10 10 0 0 1 -2 -19.8 A13 13 0 0 1 49 38 a9 9 0 0 1 -2 16 H26 Z" {...strokeProps} />
    </>
  ),
  employees: (
    <>
      <circle cx="26" cy="24" r="7" {...strokeProps} />
      <circle cx="52" cy="24" r="7" {...strokeProps} />
      <path d="M14 52 c0 -10 8 -16 16 -16" {...strokeProps} />
      <path d="M64 52 c0 -10 -8 -16 -16 -16" {...strokeProps} />
      <circle cx="39" cy="40" r="8" {...strokeProps} />
      <path d="M23 62 c0 -10.5 7 -16 16 -16 s16 5.5 16 16" {...strokeProps} />
    </>
  ),
  irrigation: (
    <>
      <path d="M32 12 C32 12 20 28 20 38 a12 12 0 0 0 24 0 C44 28 32 12 32 12 Z" {...strokeProps} />
      <path d="M50 34 v22 M42 44 h16 M45 52 h10 M45 60 h10" {...strokeProps} />
      <path d="M20 62 h24" {...strokeProps} />
    </>
  ),
  circuit: (
    <>
      <rect x="20" y="16" width="24" height="40" rx="2" {...strokeProps} />
      <path d="M14 24 h6 M14 34 h6 M14 44 h6 M44 24 h6 M44 34 h6 M44 44 h6" {...strokeProps} />
      <path d="M26 26 h12 v10 h-12 z" {...strokeProps} />
      <path d="M32 26 v-6 M32 42 v6" {...strokeProps} />
    </>
  ),
};

export default function ProjectIcon({ name, className = "" }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {icons[name] || icons.circuit}
    </svg>
  );
}
