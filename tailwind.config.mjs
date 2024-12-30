/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        primaryBlack: "#1f1f21",
        primaryWhite: "#F6F5F5",
        primaryLightGrey: "#D2D2D2",
        primaryDarkGrey: "#808080",
        primaryYellow: "#ffc600",
      },
		},
		fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
	},
	plugins: [],
}
