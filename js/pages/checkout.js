//Contact form
const form = document.querySelector("#checkout");
const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fnameError");
const lname = document.querySelector("#lname");
const lnameError = document.querySelector("#lnameError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const validContainer = document.querySelector(".validate");

const formState = {
  fnameInput: {
    isValid: false,
  },
  lnameInput: {
    isValid: false,
  },
  countryInput: {
    isValid: false,
  },
  addressInput: {
    isValid: false,
  },
  cityInput: {
    isValid: false,
  },
  zipInput: {
    isValid: false,
  },
  emailInput: {
    isValid: false,
  },
};

let submitted = false;
function inputValidation(event) {
  event.preventDefault();

  if (submitted) {
    if (checkLength(fname.value, 0)) {
      fnameError.style.display = "none";
      formState.fnameInput.isValid = true;
    } else {
      fnameError.style.display = "block";
    }
    if (checkLength(lname.value, 0)) {
      lnameError.style.display = "none";
      formState.lnameInput.isValid = true;
    } else {
      lnameError.style.display = "block";
    }
    if (checkLength(country.value, 3)) {
      countryError.style.display = "none";
      formState.countryInput.isValid = true;
    } else {
      countryError.style.display = "block";
    }
    if (checkLength(address.value, 10)) {
      addressError.style.display = "none";
      formState.addressInput.isValid = true;
    } else {
      addressError.style.display = "block";
    }
    if (checkLength(city.value, 0)) {
      cityError.style.display = "none";
      formState.cityInput.isValid = true;
    } else {
      cityError.style.display = "block";
    }
    if (checkLength(zip.value, 3)) {
      zipError.style.display = "none";
      formState.zipInput.isValid = true;
    } else {
      zipError.style.display = "block";
    }
    if (validateEmail(email.value)) {
      emailError.style.display = "none";
      formState.emailInput.isValid = true;
    } else {
      emailError.style.display = "block";
    }
  }
}

function submitHandler(event) {
  event.preventDefault();
  submitted = true;

  if (
    !formState.fnameInput.isValid ||
    !formState.lnameInput.isValid ||
    !formState.countryInput.isValid ||
    !formState.addressInput.isValid ||
    !formState.cityInput.isValid ||
    !formState.zipInput.isValid ||
    !formState.emailInput.isValid
  ) {
    validContainer.innerHTML = validateMessage(
      "Some fields are not correct, please try again",
      "error"
    );
    return;
  }
  validContainer.innerHTML = validateMessage("details confirmed", "success");
}

form.addEventListener("change", inputValidation);
form.addEventListener("submit", submitHandler);
form.addEventListener("submit", inputValidation);
