import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#F0D38D",
          400: "#E5C378",
          500: "#C5A14B",
          600: "#B08C36",
          champagne: "#CE9F6D",
          glow: "rgba(197, 161, 75, 0.18)",
        },
        dark: {
          950: "#050505",
          900: "#0A0A0C",
          850: "#111114",
          800: "#18181C",
          750: "#222228",
          700: "#2C2C34",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.15)",
          gold: "rgba(197, 161, 75, 0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Poppins", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        "fora-glow": "0 0 50px -10px rgba(197, 161, 75, 0.25)",
        "card-glass": "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
