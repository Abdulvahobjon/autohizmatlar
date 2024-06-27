const plusBtn = document.querySelectorAll(".plusButton");
const minusBtn = document.querySelectorAll(".minusButton");
const counterNum = document.querySelectorAll(".counterNumber");
const price = document.querySelectorAll('.narx')

plusBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    counterNum[index].textContent = counterNum[index].textContent * 1 + 1;
    price[index].textContent = price[index].textContent*1 + 210
  });
});
minusBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (counterNum[index].textContent * 1 > 1) {
      counterNum[index].textContent = counterNum[index].textContent * 1 - 1;
    price[index].textContent = price[index].textContent*1 - 210

    }
  });
});
