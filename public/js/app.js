let header__search__box = document.querySelector("#header__search__box")
let header__search__btn = document.querySelector("#header__search__btn")
let header__inp = document.querySelector("#header__inp")
header__search__btn.addEventListener("click", function() {
    header__search__box.classList.toggle("max-w-[36px]")
    header__search__box.classList.toggle("md:max-w-[320px]")
    header__search__box.classList.toggle("max-w-[320px]")
    header__search__box.classList.toggle("gap-2")
    header__inp.classList.toggle("hidden")
})

let res__nav___close__btn = document.querySelector("#res__nav___close__btn")
let res__nav = document.querySelector("#res__nav")
let hamburger__btn = document.querySelector("#hamburger__btn")
let overlay = document.querySelector("#overlay")
let body = document.body

res__nav___close__btn.addEventListener("click", function() {
    res__nav.classList.add("right-[-100%]")
    res__nav.classList.remove("right-0")
    overlay.classList.add("hidden")
    body.classList.remove("h-screen")
    body.classList.remove("overflow-hidden")
})

hamburger__btn.addEventListener("click", function() {
    res__nav.classList.remove("right-[-100%]")
    res__nav.classList.add("right-0")
    overlay.classList.remove("hidden")
    body.classList.add("h-screen")
    body.classList.add("overflow-hidden")
})

overlay.addEventListener("click", function() {
    res__nav.classList.add("right-[-100%]")
    res__nav.classList.remove("right-0")
    overlay.classList.add("hidden")
    body.classList.remove("h-screen")
    body.classList.remove("overflow-hidden")
})