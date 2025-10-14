const burgerMenu=document.querySelector("#mobileNav") 
const burger=document.querySelector("#Hamburger") as Element & {src:string}
burger.addEventListener("click",()=>{
    burgerMenu.classList.toggle("hidden")
    if (!burgerMenu.classList.contains("hidden")){
        burger.src="/images/close.svg"
    }
    else{
        burger.src="/images/hamburger-icon.svg"
    }
})