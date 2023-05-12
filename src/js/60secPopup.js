const timeInSeconds = 5;
const timeInMilliseconds = timeInSeconds * 1000;

const popupWindow = document.querySelector(".popup");
function openModal() {
  // Code to open the modal window
  popupWindow.style.display = "block";
}

window.addEventListener("load", function () {
  setTimeout(openModal, timeInMilliseconds);
});
