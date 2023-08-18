const tailwindcss = require("tailwindcss")
module.exports = {
	plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
	theme: {
		colors: {
			sienna: "#DCC1AB"
		}
	}
}
