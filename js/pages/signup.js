const form = document.querySelector("#signupForm");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPassword = document.querySelector("#confirm");
const confirmPasswordError = document.querySelector("#confirmError");
const validContainer = document.querySelector(".validate");

const formState = {
  usernameInput: {
    isValid: false,
  },
  emailInput: {
    isValid: false,
  },
  passwordInput: {
    isValid: false,
  },
  confirmInput: {
    isValid: false,
  },
};

let submitted = false;

function inputValidation(event) {
  event.preventDefault();

  if (submitted) {
    if (checkLength(username.value, 0)) {
      usernameError.style.display = "none";
      formState.usernameInput.isValid = true;
    } else {
      usernameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
      emailError.style.display = "none";
      formState.emailInput.isValid = true;
    } else {
      emailError.style.display = "block";
    }
    if (testPassword(password.value)) {
      passwordError.style.display = "none";
      formState.passwordInput.isValid = true;
    } else {
      passwordError.style.display = "block";
    }
    if (controlPassword(password.value, confirmPassword.value)) {
      confirmError.style.display = "none";
      formState.confirmInput.isValid = true;
    } else {
      confirmError.style.display = "block";
    }
  }
}

function submitHandler(event) {
  event.preventDefault();
  submitted = true;

  if (
    !formState.usernameInput.isValid ||
    !formState.emailInput.isValid ||
    !formState.passwordInput.isValid ||
    !formState.passwordInput.isValid
  ) {
    validContainer.innerHTML = errorMessage(
      "Some fields are not correct, please try again",
      "error"
    );

    return;
  }
  validContainer.innerHTML = errorMessage(
    "Welcome" + " " + username.value + "!",
    "success"
  );
}

form.addEventListener("change", inputValidation);
form.addEventListener("submit", submitHandler);
form.addEventListener("submit", inputValidation);
