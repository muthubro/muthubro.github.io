function onNavClick(option) {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    document.getElementById(option).classList.add("selected");
}
