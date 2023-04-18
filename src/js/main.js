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

window.onclick = function (event) {
  if (event.target == measurerModal) {
    measurerModal.style.display = "none";
  }
};
