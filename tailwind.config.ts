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
        brand: {
          wine: "#8B1E2D",
          "wine-dark": "#741824",
          "wine-light": "#A62B3D",
          gold: "#C9A96A",
          "gold-soft": "#D6C4A7",
          champagne: "#F4EBD9",
          terracotta: "#DFB09E",
        },
        warm: {
          canvas: "#FAFAF8",
          sand: "#F5F5F0",
          surface: "#FFFFFF",
          card: "#FAF8F5",
          espresso: "#2C2223",
          taupe: "#6E6259",
          clay: "#5C5047",
          border: "#EAE4DC",
          "border-light": "#F0ECE4",
        },
        feedback: {
          success: "#2E7D32",
          warning: "#F59E0B",
          error: "#DC2626",
          info: "#2563EB",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        "warm-sm": "0 2px 8px rgba(44, 34, 35, 0.04)",
        "warm-md": "0 6px 20px -4px rgba(44, 34, 35, 0.06)",
        "warm-lg": "0 14px 34px -8px rgba(44, 34, 35, 0.08)",
        "wine-glow": "0 8px 24px -4px rgba(139, 30, 45, 0.25)",
        "card-soft": "0 10px 30px -10px rgba(44, 34, 35, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
