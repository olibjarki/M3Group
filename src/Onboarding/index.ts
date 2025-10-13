const buttons = document.querySelectorAll(".color-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("bg-[#DE8417]");
    btn.classList.toggle("text-white");
    btn.classList.toggle("text-[#DE8417]");
  });
});