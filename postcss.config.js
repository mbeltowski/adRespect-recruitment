const tailwindcss = require("tailwindcss")
module.exports = {
	mode: "jit",
	plugins: [tailwindcss("tailwind.js"), require("autoprefixer")],
	theme: {
		colors: {
			sienna: "#DCC1AB"
		}
	}
}
