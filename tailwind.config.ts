import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        pd: "#3D2066", // Purple Dark
        pm: "#5B2D8E", // Purple Main
        om: "#E8820C", // Orange Main
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "glow-pm": "0 0 40px -8px rgba(91,45,142,0.4)",
        "glow-om": "0 0 40px -8px rgba(232,130,12,0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
