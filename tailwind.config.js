/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#6c63ff",
          light: "#a78bfa",
          cyan: "#38bdf8",
        },
        dark: {
          bg: "#0a0a0f",
          bg2: "#111118",
          surface: "#1c1c28",
          surface2: "#242434",
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
