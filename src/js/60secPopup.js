const timeInSeconds = 60;
const timeInMilliseconds = timeInSeconds * 1000;
const popupWindow = document.querySelector(".popup");

function openModal() {
  popupWindow.style.display = "block";
}

window.addEventListener("load", function () {
  setTimeout(openModal, timeInMilliseconds);
});
