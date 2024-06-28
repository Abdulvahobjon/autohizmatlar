const plusBtn = document.querySelectorAll(".plusButton");
const minusBtn = document.querySelectorAll(".minusButton");
const counterNum = document.querySelectorAll(".counterNumber");
const price = document.querySelectorAll('.narx')
const allPrice = document.getElementById('jamiNarx')

plusBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    counterNum[index].textContent = counterNum[index].textContent * 1 + 1;
    price[index].textContent = price[index].textContent*1 + 210
    allPrice.textContent = allPrice.textContent*1 + 210
  });
});
minusBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (counterNum[index].textContent * 1 > 1) {
      counterNum[index].textContent = counterNum[index].textContent * 1 - 1;
    price[index].textContent = price[index].textContent*1 - 210
    allPrice.textContent = allPrice.textContent*1 - 210
    }
  });
});


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


// delete function from savatcha

let btnForDeleteFun = document.querySelectorAll('.btnForDeleteFun')
let itemForDelete = document.querySelectorAll('.itemForDelete')
let clearAll = document.getElementById('clearAll')

btnForDeleteFun.forEach((item, index) => {
  item.addEventListener('click', () => {
    itemForDelete[index].remove()
  })
})

clearAll.addEventListener('click', () => {
  itemForDelete.forEach((item) => {
    item.remove()
  })
})