var buttons_orange = document.querySelectorAll(".color-btn");
buttons_orange.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.classList.toggle("bg-[#DE8417]");
        btn.classList.toggle("text-white");
        btn.classList.toggle("text-[#DE8417]");
    });
});
