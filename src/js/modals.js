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

window.onclick = function (event) {
  if (event.target == measurerModal) {
    measurerModal.style.display = "none";
  } else if (event.target == callOrAskModal) {
    callOrAskModal.style.display = "none";
  } else if (event.target == calcModal) {
    calcModal.style.display = "none";
  }
};
