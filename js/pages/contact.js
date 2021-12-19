//Contact form
const form = document.querySelector("#contact");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const validContainer = document.querySelector(".validate");

const formState = {
  nameInput: {
    isValid: false,
  },
  emailInput: {
    isValid: false,
  },
  messageInput: {
    isValid: false,
  },
};

let submitted = false;
function inputValidation(event) {
  event.preventDefault();

  if (submitted) {
    if (checkLength(name.value, 0)) {
      nameError.style.display = "none";
      formState.nameInput.isValid = true;
    } else {
      nameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
      emailError.style.display = "none";
      formState.emailInput.isValid = true;
    } else {
      emailError.style.display = "block";
    }
    if (checkLength(message.value, 10)) {
      messageError.style.display = "none";
      formState.messageInput.isValid = true;
    } else {
      messageError.style.display = "block";
    }
  }
}

function submitHandler(event) {
  event.preventDefault();
  submitted = true;

  if (
    !formState.nameInput.isValid ||
    !formState.emailInput.isValid ||
    !formState.messageInput.isValid
  ) {
    validContainer.innerHTML = validateMessage(
      "Some fields are not correct, please try again",
      "error"
    );
    return;
  }
  validContainer.innerHTML = validateMessage("Message sent!", "success");
}

form.addEventListener("change", inputValidation);
form.addEventListener("submit", submitHandler);
form.addEventListener("submit", inputValidation);
