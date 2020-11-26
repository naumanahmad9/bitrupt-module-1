const nameField = document.getElementById("input-name");
const emailField = document.getElementById("input-email");
const uppercaseRegex = /^[A-Z]/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validation() {
  let name = nameField.value;
  let email = emailField.value;

  if (!uppercaseRegex.test(name)) { 

    alert("Please enter correct name");
    return false;

  } else if (!emailRegex.test(email)) {

    alert("Please enter correct email address");
    return false;
    
  } else {

    return true;
  }

}
