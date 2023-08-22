const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

menuToggle.addEventListener("change", () => {
	menu.classList.toggle("hidden")
})

const sliderLeft = document.getElementById("slider-left")
const sliderRight = document.getElementById("slider-right")

let imgIndex = 0

const images = ["files/maze.png", "https://picsum.photos/531/500", "https://picsum.photos/500/520", "https://picsum.photos/450/500", "https://picsum.photos/500/404"]

sliderLeft.addEventListener("click", () => {
	const currentImg = document.querySelector("#slider-image")
	imgIndex = Math.max(imgIndex - 1, 0)
	currentImg.src = images[imgIndex]
})

sliderRight.addEventListener("click", () => {
	const currentImg = document.querySelector("#slider-image")
	imgIndex = Math.min(imgIndex + 1, images.length - 1)
	currentImg.src = images[imgIndex]
})
