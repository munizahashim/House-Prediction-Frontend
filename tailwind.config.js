/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				shadow1: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
			},
			backgroundImage: {
				gradient1: "linear-gradient(to top, #f5f7ff, #fff)",
			},
		},
	},
	plugins: [],
};
