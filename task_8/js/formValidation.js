const uppercaseRegex = /^[A-Z]/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function contactValidation() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;

  if (!uppercaseRegex.test(name)) {
    alert("Please enter correct name");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Please enter correct email address");
    return false;
  } else {
    alert("Message Sent");
    return true;
  }
}

function loginValidation() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  if (!emailRegex.test(email)) {
    alert("Please enter correct email address");
    return false;
  } else if (!passwordRegex.test(password)) {
    alert("Please enter correct password");
    return false;
  } else {
    alert("Login Successful");
    return true;
  }
}