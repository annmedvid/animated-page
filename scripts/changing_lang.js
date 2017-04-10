let lang = document.querySelector(".lang")
let langOptions = Array.from(document.querySelectorAll(".lang-option"))

function changeLanguage(event) {
	langOptions.map(option => option.classList.remove("selected"))

	this.classList.add("selected")
}

function showHideLanguage(event) {	
	if(event.type == "mouseover") {
		langOptions.map(option => option.classList.add("hover"))
		return
	}

	langOptions.map(option => option.classList.remove("hover"))
}

langOptions.map(option => option.addEventListener("click", changeLanguage))
langOptions.map(option => option.addEventListener("mouseover", showHideLanguage))
langOptions.map(option => option.addEventListener("mouseout", showHideLanguage))
