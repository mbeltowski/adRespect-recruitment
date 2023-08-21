// import Masonry from "masonry-layout"

window.onload = () => {
	const imgContainer = document.querySelector(".images-container")
	const randomImages = ["https://picsum.photos/531/320", "https://picsum.photos/775/220", "https://picsum.photos/112/500", "https://picsum.photos/663/404", "https://picsum.photos/991/702", "https://picsum.photos/252/301"]
	randomImages.forEach((img) => {
		const imgElement = document.createElement("img")
		console.log(imgElement)
		imgElement.src = img
		imgElement.classList.add("border-4")
		imgContainer.appendChild(imgElement)
	})

	const mansory = new Masonry(imgContainer, {
		itemSelector: ".images-container img",
		// columnWidth: 200,
		gutter: 10,
		fitWidth: true,
		stagger: 30
		// transitionDuration: "0.2s"
		// percentPosition: true
		// horizontalOrder: true
	})
}

const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

menuToggle.addEventListener("change", () => {
	if (menuToggle.checked) {
		menu.classList.remove("hidden")
	} else {
		menu.classList.add("hidden")
	}
})
