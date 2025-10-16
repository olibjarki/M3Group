var burgerMenu = document.querySelector("#mobileNav");
var burger = document.querySelector("#Hamburger");
burger.addEventListener("click", function () {
    burgerMenu.classList.toggle("hidden");
    if (!burgerMenu.classList.contains("hidden")) {
        burger.src = "../../images/close.svg";
    }
    else {
        burger.src = "../../images/hamburger-icon.svg";
    }
});
