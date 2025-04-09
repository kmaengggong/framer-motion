import type { Config } from "tailwindcss";

export default {
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
				// TODO: 순서 변경
				"mygo-color": "#77BBDD",
				"tomori-color": "#77BBDD",
				"anon-color": "#FF8899",
				"rana-color": "#77DD77",
				"soyo-color": "#FFDD88",
				"taki-color": "#7777AA",

				"mujica-color": "",
				"uika-color": "",
				"sakiko-color": "",
				"umiri-color": "",
				"mutsumi-color": "",
			},
			fontFamily: {
				main: ['"'],
			}
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
