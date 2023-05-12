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

/* Калькулятор. При нажатии на кнопку "далее" */

const button = document.querySelector(".popup_calc_button");
const modalToClose = document.querySelector(".popup_calc");
const calcProfile = document.querySelector(".popup_calc_profile");
// Add a click event listener to the button
button.addEventListener("click", () => {
  // Get the current modal window element
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
// Add a click event listener to the button
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
  } else if (event.target == callOrAskModal) {
    callOrAskModal.style.display = "none";
  } else if (event.target == calcModal) {
    calcModal.style.display = "none";
  } else if (event.target == calcProfile) {
    calcProfile.style.display = "none";
  } else if (event.target == calcEnd) {
    calcEnd.style.display = "none";
  }
};

document.addEventListener("submit", function (event) {
  // Check if the submitted element is a form with the "form" class
  if (event.target.classList.contains("form")) {
    event.preventDefault();

    // Get the name and phone number values from the submitted form
    const name = event.target.querySelector("input[name='user_name']").value;
    const phone = event.target.querySelector("input[name='user_phone']").value;

    const baChoice = document.querySelector(".balcon_icons .do_image_more img");

    const widthInput = document.getElementById("width").value;
    const heightInput = document.getElementById("height").value;

    const viewTypeSelect = document.getElementById("view_type").value;

    const coldCheckbox = document.getElementById("coldCheck");
    const warmCheckbox = document.getElementById("warmCheck");

    let checkValue;

    if (coldCheckbox.checked) checkValue = "Холодное";
    if (warmCheckbox.checked) checkValue = "Теплое";

    const formData = new FormData();
    formData.append("user_name", name);
    formData.append("user_phone", phone);

    formData.append("balcon choice", baChoice.alt);
    formData.append("width", widthInput);
    formData.append("height", heightInput);
    formData.append("view_type", viewTypeSelect);
    formData.append("profile type", checkValue);

    // Display a message to the user indicating that the form is being submitted
    const message = document.createElement("div");

    message.innerHTML = "Отправляем ваши данные...";
    event.target.appendChild(message);

    // Mock sending the form data to the server
    console.log("Form data submitted:");
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Mock sending the form data to the server
    setTimeout(function () {
      message.remove();
      // Update the message to indicate whether the submission was successful or not
      if (Math.random() < 0.5) {
        alert("Данные успешно отправлены!");
      } else {
        alert("Ошибка! Пожалуйста, попытайтесь еще раз.");
      }
    }, 2000);
  }

  // const xhr = new XMLHttpRequest();
  //   xhr.open("POST", "/submit-form.php");
  //   xhr.addEventListener("load", function() {
  //     // Update the message to indicate whether the submission was successful or not
  //     if (xhr.status === 200) {
  //       message.textContent = "Form data sent successfully!";
  //     } else {
  //       message.textContent = "Error sending form data. Please try again later.";
  //     }
  //   });
  //   xhr.send(formData);
});

/* Первые табы */

const tabLinks = document.querySelectorAll(
  ".tree_link, .aluminum_link, .plastic_link, .french_link, .rise_link"
);
const tabContents = document.querySelectorAll(
  ".tree, .aluminum, .plastic, .french, .rise"
);

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove the active class from all links
    tabLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    event.target.classList.add("active");

    // Show the corresponding tab content based on the clicked link's class name
    const className = event.target.classList[0].replace("_link", "");
    tabContents.forEach((tabContent) => {
      if (tabContent.classList.contains(className)) {
        // If the corresponding tab content exists, display it and hide the others
        tabContent.style.display = "block";
      } else {
        tabContent.style.display = "none";
      }
    });
  });
});

/* Вторые табы. Decoration */

const decorationItems = document.querySelectorAll(".decoration_item");
const decorationContents = document.querySelectorAll(
  ".internal, .external, .rising, .roof"
);

// Loop through all decoration items
decorationItems.forEach((item, index) => {
  // Add click event listener to each item
  item.addEventListener("click", () => {
    // Remove "after_click" class from all items
    decorationItems.forEach((item) => {
      item.querySelector(".no_click").classList.remove("after_click");
    });

    // Add "after_click" class to clicked item
    item.querySelector(".no_click").classList.add("after_click");

    // Hide all decoration contents
    decorationContents.forEach((content) => {
      content.style.display = "none";
    });

    // Show the corresponding decoration content
    decorationContents[index].style.display = "block";
  });
});

// Set the date and time you want to count down to
const countDownDate = new Date("November 20, 2023 12:00:00").getTime();

// Update the countdown every second
const x = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with the corresponding ID
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Get all the preview images
const previewImages = document.querySelectorAll(".preview");

// Create the modal dialog
const worksModal = document.createElement("div");
worksModal.classList.add("works-modal");

const modalContent = document.createElement("img");
modalContent.classList.add("modal-content");

worksModal.appendChild(modalContent);
document.body.appendChild(worksModal);

// Loop through all the preview images
previewImages.forEach((image) => {
  // Add click event listener to each preview image
  image.addEventListener("click", function (event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Get the URL of the big image
    const bigImageUrl = this.parentNode.getAttribute("href");

    // Set the src attribute of the modal image to the URL of the big image
    modalContent.setAttribute("src", bigImageUrl);

    // Show the modal
    worksModal.style.display = "flex";
  });
});

worksModal.addEventListener("click", (event) => {
  if (event.target === worksModal) {
    worksModal.style.display = "none";
  }
});

const timeInSeconds = 60;
const timeInMilliseconds = timeInSeconds * 1000;

const popupWindow = document.querySelector(".popup");
function openModal() {
  // Code to open the modal window
  popupWindow.style.display = "block";
}

window.addEventListener("load", function () {
  setTimeout(openModal, timeInMilliseconds);
});
