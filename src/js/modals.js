/* Вызов замерщика */

const measurerModal = document.querySelector(".popup_engineer");
const measurerBtn = document.getElementById("callMeasurer");
const span = document.getElementById("popup_close");

measurerBtn.addEventListener("click", () => {
  measurerModal.style.display = "block";
});

span.addEventListener("click", () => {
  measurerModal.style.display = "none";
});

/* “Заказать обратный звонок” и “Спросите у нашего специалиста” */

const callModal = document.querySelector(".popup");
const callModalBtns = document.querySelectorAll(".phone_link");
const closeCallModal = document.getElementById("closeCallOrAsk");

callModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    callModal.style.display = "block";
  });
});

closeCallModal.addEventListener("click", () => {
  callModal.style.display = "none";
});

/* Калькулятор */

const calcBtns = document.querySelectorAll(".glazing_price_btn");
const calcModal = document.querySelector(".popup_calc");
const closeCalcModals = document.querySelectorAll(".popup_calc_close");

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

const icons = document.querySelectorAll(".balcon_icons_img");
const bigImgs = document.querySelectorAll(".big_img img");

icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    // hide all big images
    bigImgs.forEach((img) => {
      img.style.display = "none";
    });
    // display the corresponding big image
    bigImgs[index].style.display = "block";
  });
});

/* Калькулятор. При нажатии на кнопку "далее" */

const button = document.querySelector(".popup_calc_button");
const modalToClose = document.querySelector(".popup_calc");
const calcProfile = document.querySelector(".popup_calc_profile");

button.addEventListener("click", () => {
  modalToClose.style.display = "none";

  // Show the next modal window
  calcProfile.style.display = "block";
});

const calcProfileClose = document.querySelector(".popup_calc_profile_close");
calcProfileClose.addEventListener("click", () => {
  calcProfile.style.display = "none";
});

/* Калькулятор. Запрет за выбор двух чекбоксов */

const checkboxes = document.querySelectorAll('input[name="checkbox-test"]');
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", () => {
    if (checkboxes[i].checked) {
      for (let j = 0; j < checkboxes.length; j++) {
        if (j !== i) {
          checkboxes[j].checked = false;
        }
      }
    }
  });
}

/* Калькулятор. При нажатии на вторую кнопку "далее" */

const secondButton = document.querySelector(".popup_calc_profile_button");
const secondModalToClose = document.querySelector(".popup_calc_profile");
const calcEnd = document.querySelector(".popup_calc_end ");

secondButton.addEventListener("click", () => {
  // Get the current modal window element
  secondModalToClose.style.display = "none";

  // Show the next modal window
  calcEnd.style.display = "block";
});

const calcEndClose = document.querySelector(".popup_calc_end_close");
calcEndClose.addEventListener("click", () => {
  calcEnd.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == measurerModal) {
    measurerModal.style.display = "none";
  } else if (event.target == callModal) {
    callModal.style.display = "none";
  } else if (event.target == calcModal) {
    calcModal.style.display = "none";
  } else if (event.target == calcProfile) {
    calcProfile.style.display = "none";
  } else if (event.target == calcEnd) {
    calcEnd.style.display = "none";
  }
};
