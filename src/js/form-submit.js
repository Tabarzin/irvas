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
    // formData.append("user_name", name);
    // formData.append("user_phone", phone);

    // formData.append("balcon choice", baChoice.alt);
    // formData.append("width", widthInput);
    // formData.append("height", heightInput);
    // formData.append("view_type", viewTypeSelect);
    // formData.append("profile type", checkValue);

    formData.append("user_name", name);
    formData.append("user_phone", phone);

    if (baChoice.alt) {
      formData.append("balcon choice", baChoice.alt);
    }

    if (widthInput) {
      formData.append("width", widthInput);
    }

    if (heightInput) {
      formData.append("height", heightInput);
    }

    if (viewTypeSelect) {
      formData.append("view_type", viewTypeSelect);
    }

    if (checkValue) {
      formData.append("profile type", checkValue);
    }

    const objectFromForm = Object.fromEntries(formData.entries());
    const json = JSON.stringify(objectFromForm);

    const postData = async (url, data) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: data,
      });

      return await res.json();
    };

    postData("http://localhost:3000/formSubmissions", json)
      .then((data) => {
        console.log(data);
      })
      .catch(() => {})
      .finally(() => {
        form.reset();
      });

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
    //   setTimeout(function () {
    //     message.remove();
    //     // Update the message to indicate whether the submission was successful or not
    //     if (Math.random() < 0.5) {
    //       alert("Данные успешно отправлены!");
    //     } else {
    //       alert("Ошибка! Пожалуйста, попытайтесь еще раз.");
    //     }
    //   }, 2000);
  }
});
