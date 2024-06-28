let filter__catalog = document.querySelector("#filter__catalog")
let catalog__res = document.querySelector("#catalog__res")
let catalog__right = document.querySelector("#catalog__right")
let catslog__left = document.querySelector("#catslog__left")

filter__catalog.addEventListener("click" , function(){
    filter__catalog.classList.toggle("mb-12")
    filter__catalog.classList.toggle("mb-5")
    catalog__res.classList.toggle("hidden")
    catalog__res.classList.toggle("flex")
    catalog__right.classList.toggle("hidden")
    catalog__right.classList.toggle("catalog__right_active")
    catalog__right.classList.toggle("grid")
})
let catalog__left__box = document.querySelectorAll("#catalog__left__box")
let catalog__left__box__title = document.querySelectorAll("#catalog__left__box__title")

catalog__left__box__title.forEach(function(item , index){
    item.addEventListener("click" , function(){
        catalog__left__box[index].classList.toggle("h-[58px]")
        catalog__left__box[index].classList.toggle("h-[267px]")
    }) 
})



// GOODS HTML FUNCTIONS

const goods__burger = document.getElementById("goods_burger");
const goods__close = document.getElementById("goods__close");
const goods__nav = document.getElementById("goods__nav");

goods__burger.addEventListener("click", () => {
  goods__nav.classList.add("left-0");
  goods__nav.classList.remove("left-full");
});
goods__close.addEventListener("click", () => {
  goods__nav.classList.remove("left-0");
  goods__nav.classList.add("left-full");
});

const catalog = document.getElementById("catalog");
const catalogDiv = document.getElementById("catalogDiv")

catalog.addEventListener("click", () => {
    if(document.body.style.overflow != "hidden"){
        document.body.style.overflow = 'hidden'

    }else{
        document.body.style.overflow = 'auto'
    }
    catalog.classList.toggle('bg-black')
    catalogDiv.classList.toggle('md:top-[180px]')
    catalogDiv.classList.toggle('top-[150px]')
    catalogDiv.classList.toggle('top-[100%]')
    catalogDiv.classList.toggle('md:top-[100%]')

})
