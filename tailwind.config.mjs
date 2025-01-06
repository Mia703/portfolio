/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#1f1f21",
        primaryWhite: "#f9f9f9",
        primaryLightGrey: "#D2D2D2",
        primaryDarkGrey: "#a7a7a7",
        primaryYellow: "#ffc600",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
