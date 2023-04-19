function validatePhone() {
  const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  const phone = document.getElementById("phone").value;
  const valid = re.test(phone);
  if (valid) output = "Номер телефона введен правильно!";
  else output = "Номер телефона введен неправильно!";
  alert(123);

  document.getElementById("message").innerHTML =
    document.getElementById("message").innerHTML + "<br />" + output;
  return valid;
}
