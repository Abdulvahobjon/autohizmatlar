let filter__catalog = document.querySelector("#filter__catalog")
let catalog__res = document.querySelector("#catalog__res")
let catalog__right = document.querySelector("#catalog__right")
let catslog__left = document.querySelector("#catslog__left")


filter__catalog.addEventListener("click" , function(){
    filter__catalog.classList.toggle("mb-12")
    catalog__res.classList.toggle("hidden")
    catalog__res.classList.toggle("flex")

    catalog__right.classList.toggle("hidden")
    catalog__right.classList.toggle("catalog__right_active")
    catalog__right.classList.toggle("grid")

    catslog__left.classList.toggle("hidden")
})
let catalog__left__box = document.querySelectorAll("#catalog__left__box")

catalog__left__box.forEach(function(item , index){
    item.addEventListener("click" , function(){
        catalog__left__box[index].classList.toggle("h-[58px]")
        catalog__left__box[index].classList.toggle("h-[252px]")
    }) 
})
