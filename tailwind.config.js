/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          surface: "#111A2C",
          raised: "#182642",
        },
        paper: {
          DEFAULT: "#E8ECF4",
          muted: "#93A0B8",
          dim: "#5C6B85",
        },
        brass: {
          DEFAULT: "#D98E3C",
          bright: "#F0AC5F",
          dim: "#8C5F2C",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          dim: "#2E7D74",
        },
        line: "rgba(232,236,244,0.09)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(232,236,244,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,236,244,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
