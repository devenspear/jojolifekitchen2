import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#FAF5EF",
        tomato: "#FF6A5A",
        charcoal: "#222222",
        warmGray: "#B7B7B7",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        scaleIn: "scaleIn 0.3s ease-in-out",
        stutter: "stutter 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        stutter: {
          "0%, 20%": { opacity: "0" },
          "25%, 30%": { opacity: "1" },
          "35%, 40%": { opacity: "0" },
          "45%, 100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config; 