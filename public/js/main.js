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