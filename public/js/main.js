/**cursor */
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});

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

/* ScrollReveal for smooth transitions */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})
const srproj = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    reset: false
})

/* ScrollReveal media queries needed for mobile version */
function srMediaQuery(f) {
    if (f.matches) { // If media query matches
        sr.reveal('.main-text', { delay: 200 })
        sr.reveal('.main-photo', { distance: '0px' })
        //srproj.reveal('.latest-grid', {delay:200})

    } else {

        /*home section*/
        sr.reveal('.main-text', { delay: 100 })
        sr.reveal('.main-photo', { origin: 'left', delay: 200 })

        /*featured project */
        sr.reveal('.feat-grid', { delay: 200 })

        /*about section*/
        sr.reveal('.about-grid', { delay: 200 })

        /*projects page*/
        srproj.reveal('.latest-grid', { delay: 200, interval: 200 })
        srproj.reveal('.projects-grid', { delay: 200 })
    }
}

var f = window.matchMedia("(max-width: 715px)")
srMediaQuery(f) // Call listener function at run time
f.addListener(srMediaQuery) // Attach listener function on state changes