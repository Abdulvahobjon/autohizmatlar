let filter__catalog = document.querySelector("#filter__catalog")
let catalog__res = document.querySelector("#catalog__res")
let catalog__right = document.querySelector("#catalog__right")

console.log(catalog__right);

filter__catalog.addEventListener("click" , function(){
    filter__catalog.classList.toggle("mb-12")
    catalog__res.classList.toggle("hidden")
    catalog__res.classList.toggle("flex")
    catalog__right.classList.toggle("hidden")
    catalog__right.classList.toggle("catalog__right_active")
    catalog__right.classList.toggle("grid")
})