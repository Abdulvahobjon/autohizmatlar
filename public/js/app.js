// Function to safely add event listeners
const addEventListenerSafely = (selector, event, handler) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener(event, handler);
    }
  };
  
  // Function to toggle classes
  const toggleClasses = (element, ...classes) => {
    if (element) {
      classes.forEach(cls => element.classList.toggle(cls));
    }
  };
  
  // Function to add classes
  const addClasses = (element, ...classes) => {
    if (element) {
      classes.forEach(cls => element.classList.add(cls));
    }
  };
  
  // Function to remove classes
  const removeClasses = (element, ...classes) => {
    if (element) {
      classes.forEach(cls => element.classList.remove(cls));
    }
  };
  
  // Toggle search box
  addEventListenerSafely("#header__search__btn", "click", () => {
    const headerSearchBox = document.querySelector("#header__search__box");
    toggleClasses(
      headerSearchBox,
      "max-w-[36px]",
      "md:max-w-[320px]",
      "max-w-[320px]",
      "gap-2"
    );
  });
  
  // Toggle responsive nav
  const toggleResponsiveNav = (openSelector, navSelector, backdropSelector) => {
    addEventListenerSafely(openSelector, "click", () => {
      const resNav = document.querySelector(navSelector);
      const resNavBackdrop = document.querySelector(backdropSelector);
      const body = document.body;
      
      toggleClasses(resNav, "right-[-100%]", "right-0");
      toggleClasses(resNavBackdrop, "hidden", "block");
      toggleClasses(body, "h-screen", "overflow-hidden");
    });
    
    addEventListenerSafely(backdropSelector, "click", () => {
      const resNav = document.querySelector(navSelector);
      const resNavBackdrop = document.querySelector(backdropSelector);
      const body = document.body;
      
      toggleClasses(resNav, "right-0", "right-[-100%]");
      toggleClasses(resNavBackdrop, "block", "hidden");
      toggleClasses(body, "overflow-hidden", "h-screen");
    });
  };
  
  toggleResponsiveNav("#hamburger__btn", "#res__nav", "#res__nav__backdrop");
  addEventListenerSafely("#res__nav___close__btn", "click", () => {
    const resNav = document.querySelector("#res__nav");
    const resNavBackdrop = document.querySelector("#res__nav__backdrop");
    const body = document.body;
    
    toggleClasses(resNav, "right-0", "right-[-100%]");
    toggleClasses(resNavBackdrop, "block", "hidden");
    toggleClasses(body, "overflow-hidden", "h-screen");
  });
  
  // Highlight problem card
  document.querySelectorAll("#problem_b_card").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll("#problem_b_card").forEach(card => {
        removeClasses(card, "bg-[#E7E2E2]");
      });
      addClasses(item, "bg-[#E7E2E2]");
    });
  });
  
  // Toggle big menu
  addEventListenerSafely("#header__big__menu__open", "click", () => {
    const headerBigMenu = document.querySelector("#header__big__menu");
    toggleClasses(headerBigMenu, "top-20", "bottom-[-100%]");
    document.body.classList.add("overflow-hidden");
  });
  
  addEventListenerSafely("#header__big__menu__backdrop", "click", () => {
    const headerBigMenu = document.querySelector("#header__big__menu");
    toggleClasses(headerBigMenu, "bottom-[-100%]", "top-20");
    document.body.classList.remove("overflow-hidden")
  });
  
  // Toggle responsive big menu
  addEventListenerSafely("#res__big__menu", "click", () => {
    const resBigMenu = document.querySelector("#res__big__menu");
    toggleClasses(resBigMenu, "h-[270px]", "h-[20px]");
  });
  
  // Toggle profile xizmat text
  document.querySelectorAll(".profile__xizmat__text").forEach(item => {
    const profileXizmatClose = item.nextElementSibling;
    item.addEventListener("click", () => {
      toggleClasses(item, "bg-[#D8D8D8]", "bg-[#F0F6FA]");
      if (profileXizmatClose) {
        toggleClasses(profileXizmatClose, "hidden");
      }
    });
  });
  
  // Validate password reset form
  addEventListenerSafely("#res__pas__btn", "click", (e) => {
    e.preventDefault();
  
    const pas1 = document.querySelector("#pas1");
    const pas2 = document.querySelector("#pas2");
    const validationResNav = document.querySelector("#validation__res__nav");
    const validationResNav1 = document.querySelector("#validation__res__nav_1");
  
    const toggleVisibility = (element) => {
      if (element) {
        toggleClasses(element, "hidden", "block");
      }
    };
  
    if (pas1 && pas1.value === "") {
      toggleVisibility(validationResNav1);
  
      setTimeout(() => {
        toggleVisibility(validationResNav1);
      }, 3000);
    }
  
    if (pas1 && pas2 && pas1.value === pas2.value) {
      addClasses(validationResNav, "hidden");
      removeClasses(validationResNav, "block");
    } else {
      addClasses(validationResNav, "block");
      removeClasses(validationResNav, "hidden");
    }
  });
  
  // Toggle problem buttons and navigation
  const toggleProblemButtons = (btnList, nav1, nav2) => {
    btnList.forEach((item, index) => {
      item.addEventListener("click", () => {
        btnList.forEach(btn => removeClasses(btn, "problem__btn__1__active"));
        addClasses(item, "problem__btn__1__active");
        toggleClasses(nav1, "problem__un__active");
        toggleClasses(nav2, "problem__un__active");
      });
    });
  };
  
  toggleProblemButtons(
    document.querySelectorAll(".problem__btn__1"),
    document.querySelector(".problem_nav_1"),
    document.querySelector(".problem_nav_2")
  );
  
  toggleProblemButtons(
    document.querySelectorAll(".problem__btn__2"),
    document.querySelector(".problem_nav_2"),
    document.querySelector(".problem_nav_1")
  );
  
  // Toggle profile modal
  const toggleProfileModal = () => {
    const profileModalOpen = document.querySelectorAll(".profile__modal__open");
    const profileModalClose = document.querySelector(".profile__modal__close");
    const profilGalereyaModal = document.querySelector(".profil__galereya__modal");
  
    profileModalOpen.forEach(item => {
      item.addEventListener("click", () => {
        toggleClasses(profilGalereyaModal, "scale-0", "scale-100");
        toggleClasses(profileModalClose, "hidden", "block");
      });
    });
  
    profileModalClose.addEventListener("click", () => {
      toggleClasses(profilGalereyaModal, "scale-100", "scale-0");
      toggleClasses(profileModalClose, "block", "hidden");
    });
  };
  
  toggleProfileModal();
  