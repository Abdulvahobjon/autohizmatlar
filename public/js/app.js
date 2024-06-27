let header__search__box = document.querySelector("#header__search__box");
let header__search__btn = document.querySelector("#header__search__btn");
let header__inp = document.querySelector("#header__inp");
header__search__btn.addEventListener("click", function () {
    header__search__box.classList.toggle("max-w-[36px]");
    header__search__box.classList.toggle("md:max-w-[320px]");
    header__search__box.classList.toggle("max-w-[320px]");
    header__search__box.classList.toggle("gap-2");
    //   header__inp.classList.toggle("hidden");
});

let body = document.body;

let res__nav___close__btn = document.querySelector("#res__nav___close__btn");
let res__nav = document.querySelector("#res__nav");
let hamburger__btn = document.querySelector("#hamburger__btn");
let res__nav__backdrop = document.querySelector("#res__nav__backdrop");

res__nav___close__btn.addEventListener("click", function () {
    res__nav.classList.add("right-[-100%]");
    res__nav.classList.remove("right-0");
    res__nav__backdrop.classList.add("hidden");
    res__nav__backdrop.classList.remove("block");
    body.classList.remove("h-screen", "overflow-hidden");
});

res__nav__backdrop.addEventListener("click", function () {
    res__nav.classList.add("right-[-100%]");
    res__nav.classList.remove("right-0");
    res__nav__backdrop.classList.add("hidden");
    res__nav__backdrop.classList.remove("block");
    body.classList.remove("h-screen", "overflow-hidden");
});

hamburger__btn.addEventListener("click", function () {
    res__nav.classList.remove("right-[-100%]");
    res__nav.classList.add("right-0");
    res__nav__backdrop.classList.add("block");
    res__nav__backdrop.classList.remove("hidden");
    body.classList.add("h-screen", "overflow-hidden");
});

let problem_b_card = document.querySelectorAll("#problem_b_card");
problem_b_card.forEach(function (item, index) {
    item.addEventListener("click", function () {
        problem_b_card.forEach(function (item, index) {
            item.classList.remove("bg-[#E7E2E2]");
        });
        problem_b_card[index].classList.add("bg-[#E7E2E2]");
    });
});
let header__big__menu__open = document.querySelector(
    "#header__big__menu__open"
);
let header__big__menu = document.querySelector("#header__big__menu");
let header__big__menu__backdrop = document.querySelector(
    "#header__big__menu__backdrop"
);
let header = document.querySelector("#header");
let hero = document.querySelector(".hero");

header__big__menu__open.addEventListener("click", function () {
    header__big__menu.classList.add("top-20");
    header__big__menu.classList.remove("bottom-[-100%]");
    // header.classList.add("fixed")
    // header.classList.add("top-0")
    // header.classList.add("left-0")
    // header.classList.add("height-20")
    // hero.classList.add()
});
header__big__menu__backdrop.addEventListener("click", function () {
    header__big__menu.classList.remove("top-20");
    header__big__menu.classList.add("bottom-[-100%]");
});

let res__big__menu = document.querySelector("#res__big__menu");

res__big__menu.addEventListener("click", function () {
    res__big__menu.classList.toggle("h-[270px]");
    res__big__menu.classList.toggle("h-[20px]");
});

let profile__xizmat__text = document.querySelectorAll(".profile__xizmat__text");
let profile__xizmat__close = document.querySelectorAll(
    ".profile__xizmat__close"
);

profile__xizmat__text.forEach(function (item, index) {
    item.addEventListener("click", function () {
        item.classList.toggle("bg-[#D8D8D8]")
        item.classList.toggle("bg-[#F0F6FA]")
        profile__xizmat__close[index].classList.toggle("hidden")
    });
});



let pas1 = document.querySelector("#pas1");
let pas2 = document.querySelector("#pas2");
let reset__pas__form = document.querySelector("#reset__pas__form");
let res__pas__btn = document.querySelector("#res__pas__btn");
let validation__res__nav = document.querySelector("#validation__res__nav");
let validation__res__nav_1 = document.querySelector("#validation__res__nav_1");

res__pas__btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (pas1.value === "") {
        validation__res__nav_1.classList.toggle("hidden");
        validation__res__nav_1.classList.toggle("block");

        setTimeout(() => {
            validation__res__nav_1.classList.toggle("hidden");
            validation__res__nav_1.classList.toggle("block");
        }, 3000);
    }

    if (pas1.value === pas2.value) {
        validation__res__nav.classList.add("hidden");
        validation__res__nav.classList.remove("block");
    } else {
        validation__res__nav.classList.add("block");
        validation__res__nav.classList.remove("hidden");
    }
});



