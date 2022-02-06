// Javascript for form inputs validation

// Pulling DOM elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, getFieldName(input) + " is Required");
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      getFieldName(input) + " must be at least " + min + " characters long."
    );
  } else if (input.value.length > max) {
    showError(
      input,
      getFieldName(input) + " must be less than " + max + " characters long."
    );
  } else {
    showSuccess(input);
  }
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid.");
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password does not match");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // To ensure that submitted values retained in the fields.

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 3, 20);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
