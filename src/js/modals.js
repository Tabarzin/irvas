/* Вызов замерщика */
const measurerModal = document.querySelector(".popup_engineer");
const measurerBtn = document.getElementById("callMeasurer");
const span = document.getElementById("popup_close");

/* “Заказать обратный звонок” и “Спросите у нашего специалиста” */

const callModal = document.querySelector(".popup");
const callModalBtns = document.querySelectorAll(".phone_link");
const closeCallModal = document.getElementById("closeCallOrAsk");

/* Калькулятор */

const calcBtns = document.querySelectorAll(".glazing_price_btn");
const calcModal = document.querySelector(".popup_calc");
const closeCalcModals = document.querySelectorAll(".popup_calc_close");
const iconsContainer = document.querySelector(".balcon_icons");
const bigImgs = document.querySelectorAll(".big_img img");
const button = document.querySelector(".popup_calc_button");
const modalToClose = document.querySelector(".popup_calc");
const calcProfile = document.querySelector(".popup_calc_profile");
const calcProfileClose = document.querySelector(".popup_calc_profile_close");
const secondButton = document.querySelector(".popup_calc_profile_button");
const secondModalToClose = document.querySelector(".popup_calc_profile");
const calcEnd = document.querySelector(".popup_calc_end ");
const calcEndClose = document.querySelector(".popup_calc_end_close");

const handleClick = (event) => {
  const target = event.target;

  if (target === measurerBtn) {
    measurerModal.style.display = "block"; // Вызов замерщика
  } else if (target === span) {
    measurerModal.style.display = "none";
  } else {
    for (const btn of callModalBtns) {
      // “Заказать обратный звонок” и “Спросите у нашего специалиста”
      if (target === btn) {
        callModal.style.display = "block";
        break;
      }
    }
  }

  if (target === closeCallModal) {
    callModal.style.display = "none";
  }
};

document.addEventListener("click", handleClick);

/* Калькулятор */

calcBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calcModal.style.display = "block";
  });
});

closeCalcModals.forEach((close) => {
  close.addEventListener("click", () => {
    calcModal.style.display = "none";
  });
});

/* Калькулятор. Выбор иконок в модальном окне */

iconsContainer.addEventListener("click", (event) => {
  bigImgs.forEach((img) => {
    img.style.display = "none";

    if (event.target.alt == img.alt) {
      img.style.display = "block";
    }
  });
});

/* Калькулятор. При нажатии на кнопку "далее" */

button.addEventListener("click", () => {
  modalToClose.style.display = "none";

  // Show the next modal window
  calcProfile.style.display = "block";
});

calcProfileClose.addEventListener("click", () => {
  calcProfile.style.display = "none";
});

/* Калькулятор. При нажатии на вторую кнопку "далее" */

secondButton.addEventListener("click", () => {
  // Get the current modal window element
  secondModalToClose.style.display = "none";

  // Show the next modal window
  calcEnd.style.display = "block";
});

calcEndClose.addEventListener("click", () => {
  calcEnd.style.display = "none";
});

window.onclick = function (event) {
  switch (event.target) {
    case measurerModal:
      measurerModal.style.display = "none";
      break;
    case callModal:
      callModal.style.display = "none";
      break;
    case calcModal:
      calcModal.style.display = "none";
      break;
    case calcProfile:
      calcProfile.style.display = "none";
      break;
    case calcEnd:
      calcEnd.style.display = "none";
      break;
    default:
      break;
  }
};
