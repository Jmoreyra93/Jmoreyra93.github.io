// SLIDER E-COMMERCE 

var slideIndex = 1
showSlides(slideIndex)
showSlides2(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
    showSlides2(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
    showSlides2(slideIndex = n)
}

function showSlides(n) {
    var i
    var slides = document.getElementsByClassName("slider")
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        slides[slideIndex-1].style.display = "flex"
    }
}
showSlides()


function showSlides2(n) {
    var i
    var slides = document.getElementsByClassName("slider1")

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
        slides[slideIndex-1].style.display = "flex"
    }
}
