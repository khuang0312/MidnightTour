
const IMAGES = 10;

// makes sure the first image we see is the first image
var slideIndex = 1;
showNthImage(slideIndex);
updateCopyright();


// FUNCTIONS //
function changeImage(inc) {
    // this allows us to change the slides
    slideIndex += inc;

    switch (slideIndex) {
        case IMAGES + 1:
            slideIndex = 1;
            break;
        case 0:
            slideIndex = 10;
            break;
    }

    showNthImage(slideIndex);
}

function showNthImage(n) {
    /*
    Sets the nth image visible by making everything else invisible...
    */
    var images = document.getElementsByTagName("figure");
   
    var index = document.getElementById("img_index");
    index.innerHTML = n + "/" + IMAGES;

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[n - 1].style.display = "block";
}

function updateCopyright() {
    /*
    checks the year to keep the copyright from expiring...
    */

    var copyright = document.getElementById("copyright");
    const today = new Date();

    copyright.innerHTML += today.getFullYear() + " Kevin Huang All rights reserved";
}