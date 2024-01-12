const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0 
DisplayDot ()
addEventtoArrows ()
addEventtodots ()


function addEventtoArrows (){ 
	const divBannerArrowLeft = document.querySelector("#banner .arrow_left")
	const divBannerArrowRight = document.querySelector("#banner .arrow_right")
	const divSliderImage = document.querySelector("#banner .banner-img")
	const divtxt = document.querySelector("p")

	divBannerArrowLeft.addEventListener("click", () => {
		i-- 
		if (i === -1){
			i = slides.length -1 
		}
		divSliderImage.src = slides[i].image
		divtxt.innerHTML = slides[i].tagLine
		ActiveDot(i)
	})
	
	divBannerArrowRight.addEventListener("click", function () {
			i++
			if (i === slides.length) {
				i = 0
			}
			divSliderImage.src = slides[i].image
			divtxt.innerHTML = slides[i].tagLine
			ActiveDot(i)
		})
}

function DisplayDot () {
	const divDots = document.querySelector(".dots") 
	for (let dotnum = 0; dotnum < slides.length; dotnum++){
		let divDot = document.createElement("div")
		divDot.classList.add("dot")
		if (dotnum === 0) { 
			divDot.classList.add("dot_selected")
		}
		divDots.appendChild(divDot)
	}
}


function ActiveDot (count) {
	const divDot = document.querySelectorAll(".dot")
	divDot.forEach((dot, index) => {
		dot.classList.remove("dot_selected")
		if (index === count) { 
			dot.classList.add("dot_selected")
		}
	})
}

function addEventtodots () {
	const divDot = document.querySelectorAll(".dot")
	const divSliderImage = document.querySelector("#banner .banner-img")
	const divtxt = document.querySelector("p")
	for (let n = 0; n < slides.length; n ++){
		divDot[n].addEventListener("click", function (){
			divSliderImage.src = slides[n].image
			divtxt.innerHTML = slides[n].tagLine
			ActiveDot(n)
		})
	}
}
