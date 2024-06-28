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