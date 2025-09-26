/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // move half since list is duplicated
        },
      },
      animation: {
        marquee: "marquee 14s linear infinite", // adjust speed here
      },
    },
  },
  plugins: [],
}

