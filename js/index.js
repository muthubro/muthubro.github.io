function onNavClick(option) {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    document.getElementById(option).classList.add("selected");

    scrollToElement("#" + option + "-section");
}

var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    console.log($(el).offset().top);
    $('html,body').animate({
        scrollTop: $(el).offset().top - 160
    }, speed);
}

function onScroll() {
    let position = window.pageYOffset || document.documentElement.scrollTop;
    let aboutPosition = 300;
    let galleryPosition = $("#gallery").offset().top + 300;

    if (position <= aboutPosition) {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        document.getElementById("about").classList.add("selected");
    } else if (position <= galleryPosition) {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        document.getElementById("gallery").classList.add("selected");
    }

    if (position === 0) {
        document.getElementsByClassName("navbar")[0].classList.add("transparent");
    } else {
        document.getElementsByClassName("navbar")[0].classList.remove("transparent");
    }
}

document.addEventListener("scroll", onScroll);
