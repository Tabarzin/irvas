/* Вызов замерщика */

const measurerModal = document.getElementsByClassName("popup_engineer")[0];
const measurerBtn = document.getElementById("callMeasurer");
const span = document.getElementById("popup_close");

measurerBtn.onclick = function () {
  measurerModal.style.display = "block";
};

span.onclick = function () {
  measurerModal.style.display = "none";
};

/* “Заказать обратный звонок” и “Спросите у нашего специалиста” */

const callOrAskModal = document.getElementsByClassName("popup")[0];
const callOrAskBtn1 = document.getElementsByClassName("phone_link")[0];
const callOrAskBtn2 = document.getElementsByClassName("phone_link")[1];
const closeCallOrAsk = document.getElementById("closeCallOrAsk");

callOrAskBtn1.onclick = function () {
  callOrAskModal.style.display = "block";
};

callOrAskBtn2.onclick = function () {
  callOrAskModal.style.display = "block";
};

closeCallOrAsk.onclick = function () {
  callOrAskModal.style.display = "none";
};

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

window.onclick = function (event) {
  if (event.target == measurerModal) {
    measurerModal.style.display = "none";
  } else if (event.target == callOrAskModal) {
    callOrAskModal.style.display = "none";
  } else if (event.target == calcModal) {
    calcModal.style.display = "none";
  }
};
