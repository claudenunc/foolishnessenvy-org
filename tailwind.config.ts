import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0A",
        neon: {
          blue: "#00D4FF",
          pink: "#FF2D7B",
          green: "#39FF14",
          purple: "#BF40FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-body)", "Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "neon-blue": "0 0 8px #00D4FF, 0 0 24px #00D4FF80",
        "neon-pink": "0 0 8px #FF2D7B, 0 0 24px #FF2D7B80",
        "neon-green": "0 0 8px #39FF14, 0 0 24px #39FF1480",
        "neon-purple": "0 0 8px #BF40FF, 0 0 24px #BF40FF80",
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
