let header__search__box = document.querySelector("#header__search__box")
let header__search__btn = document.querySelector("#header__search__btn")
let header__inp = document.querySelector("#header__inp")
header__search__btn.addEventListener("click" , function(){
    header__search__box.classList.toggle("max-w-[36px]")
    header__search__box.classList.toggle("md:max-w-[320px]")
    header__search__box.classList.toggle("max-w-[320px]")
    header__search__box.classList.toggle("gap-2")
    header__inp.classList.toggle("hidden")
})

let res__nav___close__btn = document.querySelector("#res__nav___close__btn")
let res__nav = document.querySelector("#res__nav")
let hamburger__btn = document.querySelector("#hamburger__btn")

res__nav___close__btn.addEventListener("click" , function(){
    res__nav.classList.add("right-[-100%]")
    res__nav.classList.remove("right-0")
})
hamburger__btn.addEventListener("click" , function(){
    res__nav.classList.remove("right-[-100%]")
    res__nav.classList.add("right-0")
})

let problem_b_card = document.querySelectorAll("#problem_b_card")
problem_b_card.forEach(function(item, index){
    item.addEventListener("click" , function(){
        problem_b_card.forEach(function(item , index){
            item.classList.remove("bg-[#E7E2E2]")
        })
        problem_b_card[index].classList.add("bg-[#E7E2E2]")
    })
})

