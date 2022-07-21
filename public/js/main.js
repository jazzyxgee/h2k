/* navigation menu overlay */
document.getElementById("open-button-container").addEventListener("click", openNav); 
document.getElementById("close-button-container").addEventListener("click", closeNav); 

function openNav() {
    document.getElementById("overlay-menu").style.width = "100%";
    document.getElementById("cursor").style.display = "block";
}
function closeNav() {
    document.getElementById("overlay-menu").style.width = "0%";
    document.getElementById("cursor").style.display = "none";
}




/**slideshow */
document.getElementById('prev').addEventListener('click', function () {
    plusSlides(-1);
}, false);
document.getElementById('next').addEventListener('click', function () {
    plusSlides(1);
}, false);


document.getElementById('dot1').addEventListener('click', function () {
    currentSlide(1);
}, false);
document.getElementById('dot2').addEventListener('click', function () {
    currentSlide(2);
}, false);
document.getElementById('dot3').addEventListener('click', function () {
    currentSlide(3);
}, false);


let slideIndex = 1;
showSlides(slideIndex);
        
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length){ 
        slideIndex = 1 
    }
    if (n < 1){ 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";

}

