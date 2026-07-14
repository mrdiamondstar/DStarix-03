import type { Config } from "tailwindcss";

/**
 * DStarix Techno — Design System
 * A restrained, luxury palette: pure white + dark graphite,
 * with electric-blue → violet accents used sparingly for signal.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Neutral spine
        ink: {
          DEFAULT: "#0a0a0f",
          900: "#0a0a0f",
          800: "#111118",
          700: "#181820",
          600: "#22222d",
          500: "#2e2e3a",
        },
        graphite: {
          DEFAULT: "#0d0d12",
          soft: "#14141b",
          line: "#1e1e28",
        },
        // Accent — a single refined blue. `violet`/`cyan` are kept as token
        // names (57 files reference them) but remapped into the same blue
        // family so the palette reads as one primary accent, used sparingly.
        electric: {
          DEFAULT: "#2563eb",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#1d4ed8",
        },
        violet: {
          DEFAULT: "#3b82f6",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
        cyan: {
          DEFAULT: "#60a5fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "10xl": ["9.5rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(37,99,235,0.35)",
        "glow-violet": "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(37,99,235,0.4)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 50px -30px rgba(0,0,0,0.6)",
        soft: "0 10px 40px -12px rgba(10,10,15,0.12)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(120deg, #3b82f6 0%, #2563eb 100%)",
        "accent-radial": "radial-gradient(60% 60% at 50% 40%, rgba(59,130,246,0.26) 0%, rgba(37,99,235,0.12) 40%, transparent 75%)",
        "grid-light": "linear-gradient(to right, rgba(10,10,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,15,0.05) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "border-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.2s infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
        "border-flow": "border-flow 6s ease infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
