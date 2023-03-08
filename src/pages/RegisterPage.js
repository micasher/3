import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateFirstName from "../validation/validateFirstName.js";
import validateStreet from "../validation/validateStreet.js";
import validateState from "../validation/validateState.js";
import validateZipCode from "../validation/validateZipCode.js";
import validateName from "../validation/validateName.js";
import validatePhoneNumber from "../validation/validatePhoneNumber.js";
import User from "../models/User.js";
import showToast from "../services/Toast.js";
import validateHouseNumber from "../validation/validateHouseNumber.js";

const inputFirstName = document.getElementById("register-first-name-input");
const inputLastName = document.getElementById("register-last-name-input");
const inputEmail = document.getElementById("register-input-email");
const inputPassword = document.getElementById("register-input-password");
const inputRePassword = document.getElementById("register-input-re-password");
const inputStreet = document.getElementById("register-street-input");
const inputState = document.getElementById("register-state-input");
const inputZipCode = document.getElementById("register-zipcode-input");
const inputCity = document.getElementById("register-city-input");
const inputCountry = document.getElementById("register-country-input");
const inputHouseNumber = document.getElementById("register-house-number-input");
const inputPhoneNumber = document.getElementById("register-phone-number-input");
const BusinessButton = document.getElementById(
  "register-business-client-checkbox"
);
const RegisterBtn = document.getElementById("register-button");

let firstNameOk = false;
let lastNameOk = false;
let emailOk = false;
let passwordOk = false;
let rePasswordOk = false;
let streetOk = true;
let stateOk = true;
let zipCodeOk = true;
let cityOk = true;
let countryOk = true;
let houseNumberOk = true;
let phoneNumberOk = true;

window.addEventListener("load", () => {
  //when page loaded
  if (inputFirstName.value !== "") {
    checkFirstNameInput();
  }
  if (inputLastName.value !== "") {
    checkLastNameInput();
  }
  if (inputEmail.value !== "") {
    checkEmailInput();
  }
  if (inputPassword.value !== "") {
    checkPasswordInput();
  }
  if (inputRePassword.value !== "") {
    checkRePasswordInput();
  }
  if (inputStreet.value !== "") {
    checkStreetInput();
  }
  if (inputState.value !== "") {
    checkStateInput();
  }
  if (inputZipCode.value !== "") {
    checkZipCodeInput();
  }
  if (inputCity.value !== "") {
    checkCityInput();
  }
  if (inputCountry.value !== "") {
    checkCountryInput();
  }
  if (inputHouseNumber.value !== "") {
    checkHouseNumberInput();
  }
  if (inputPhoneNumber.value !== "") {
    checkPhoneNumberInput();
  }
  if (BusinessButton.value !== "") {
    checkIfBusiness();
  }
  if (RegisterBtn.value !== "") {
    checkIfRegister();
  }
});

inputFirstName.addEventListener("input", () => {
  checkFirstNameInput();
});

inputLastName.addEventListener("input", () => {
  checkLastNameInput();
});

inputEmail.addEventListener("input", () => {
  checkEmailInput();
});

inputPassword.addEventListener("input", () => {
  checkPasswordInput();
});

inputRePassword.addEventListener("input", () => {
  checkRePasswordInput();
});

inputStreet.addEventListener("input", () => {
  checkStreetInput();
});

inputState.addEventListener("input", () => {
  checkStateInput();
});

inputZipCode.addEventListener("input", () => {
  checkZipCodeInput();
});

inputCity.addEventListener("input", () => {
  checkCityInput();
});

inputCountry.addEventListener("input", () => {
  checkCountryInput();
});

inputHouseNumber.addEventListener("input", () => {
  checkHouseNumberInput();
});

inputPhoneNumber.addEventListener("input", () => {
  checkPhoneNumberInput();
});

const checkFirstNameInput = () => {
  let errorArr = validateName(inputFirstName.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputFirstName.classList.remove("is-invalid");
    document.getElementById("register-alert-name").classList.add("d-none");
    firstNameOk = true;
  } else {
    //the text is not ok
    inputFirstName.classList.add("is-invalid");
    document
      .getElementById("register-first-name-input")
      .classList.remove("d-none");
    document.getElementById("register-first-name-input").innerHTML =
      errorArr.join("<br>");
    firstNameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkLastNameInput = () => {
  let errorArr = validateName(inputLastName.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputLastName.classList.remove("is-invalid");
    document.getElementById("register-alert-lastname").classList.add("d-none");
    lastNameOk = true;
  } else {
    //the text is not ok
    inputLastName.classList.add("is-invalid");
    document
      .getElementById("register-last-name-input")
      .classList.remove("d-none");
    document.getElementById("register-last-name-input").innerHTML =
      errorArr.join("<br>");
    lastNameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkEmailInput = () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputEmail.classList.remove("is-invalid");
    document.getElementById("register-alert-email").classList.add("d-none");
    emailOk = true;
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("register-input-email").classList.remove("d-none");
    document.getElementById("register-input-email").innerHTML =
      errorArr.join("<br>");
    emailOk = false;
  }
  checkIfCanEnableBtn();
};

const checkPasswordInput = () => {
  let errorArr = validatePassword(inputPassword.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputPassword.classList.remove("is-invalid");
    document.getElementById("register-alert-password").classList.add("d-none");
    passwordOk = true;
  } else {
    //the text is not ok
    inputPassword.classList.add("is-invalid");
    document
      .getElementById("register-input-password")
      .classList.remove("d-none");
    document.getElementById("register-input-password").innerHTML =
      errorArr.join("<br>");
    passwordOk = false;
  }
  checkIfCanEnableBtn();
};

const checkRePasswordInput = () => {
  let errorArr = validatePassword(inputRePassword.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputRePassword.classList.remove("is-invalid");
    document
      .getElementById("register-alert-repassword")
      .classList.add("d-none");
    rePasswordOk = true;
  } else {
    //the text is not ok
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("register-input-re-password")
      .classList.remove("d-none");
    document.getElementById("register-input-re-password").innerHTML =
      errorArr.join("<br>");
    rePasswordOk = false;
  }
  checkIfCanEnableBtn();
};

const checkStreetInput = () => {
  let errorArr = validateStreet(inputStreet.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputStreet.classList.remove("is-invalid");
    document.getElementById("register-alert-street").classList.add("d-none");
    streetOk = true;
  } else {
    //the text is not ok
    inputStreet.classList.add("is-invalid");
    document.getElementById("register-street-input").classList.remove("d-none");
    document.getElementById("register-street-input").innerHTML =
      errorArr.join("<br>");
    streetOk = false;
  }
  checkIfCanEnableBtn();
};

const checkStateInput = () => {
  let errorArr = validateState(inputState.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputState.classList.remove("is-invalid");
    document.getElementById("register-alert-state").classList.add("d-none");
    stateOk = true;
  } else {
    //the text is not ok
    inputState.classList.add("is-invalid");
    document.getElementById("register-state-input").classList.remove("d-none");
    document.getElementById("register-state-input").innerHTML =
      errorArr.join("<br>");
    stateOk = false;
  }
  checkIfCanEnableBtn();
};

const checkZipCodeInput = () => {
  let errorArr = validateZipCode(inputZipCode.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputZipCode.classList.remove("is-invalid");
    document.getElementById("register-alert-zipcode").classList.add("d-none");
    zipCodeOk = true;
  } else {
    //the text is not ok
    inputZipCode.classList.add("is-invalid");
    document
      .getElementById("register-zipcode-input")
      .classList.remove("d-none");
    document.getElementById("register-zipcode-input").innerHTML =
      errorArr.join("<br>");
    zipCodeOk = false;
  }
  checkIfCanEnableBtn();
};

const checkCityInput = () => {
  let errorArr = validateFirstName(inputCity.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputCity.classList.remove("is-invalid");
    document.getElementById("register-alert-city").classList.add("d-none");
    cityOk = true;
  } else {
    //the text is not ok
    inputCity.classList.add("is-invalid");
    document.getElementById("register-city-input").classList.remove("d-none");
    document.getElementById("register-city-input").innerHTML =
      errorArr.join("<br>");
    cityOk = false;
  }
  checkIfCanEnableBtn();
};

const checkCountryInput = () => {
  let errorArr = validateFirstName(inputCountry.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputCountry.classList.remove("is-invalid");
    document.getElementById("register-alert-country").classList.add("d-none");
    countryOk = true;
  } else {
    //the text is not ok
    inputCountry.classList.add("is-invalid");
    document
      .getElementById("register-country-input")
      .classList.remove("d-none");
    document.getElementById("register-country-input").innerHTML =
      errorArr.join("<br>");
    countryOk = false;
  }
  checkIfCanEnableBtn();
};

const checkHouseNumberInput = () => {
  let errorArr = validateHouseNumber(inputHouseNumber.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputHouseNumber.classList.remove("is-invalid");
    document
      .getElementById("register-alert-housenumber")
      .classList.add("d-none");
    houseNumberOk = true;
  } else {
    //the text is not ok
    inputHouseNumber.classList.add("is-invalid");
    document
      .getElementById("register-house-number-input")
      .classList.remove("d-none");
    document.getElementById("register-house-number-input").innerHTML =
      errorArr.join("<br>");
    houseNumberOk = false;
  }
  checkIfCanEnableBtn();
};

const checkPhoneNumberInput = () => {
  let errorArr = validatePhoneNumber(inputPhoneNumber.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputPhoneNumber.classList.remove("is-invalid");
    document
      .getElementById("register-alert-phonenumber")
      .classList.add("d-none");
    phoneNumberOk = true;
  } else {
    //the text is not ok
    inputPhoneNumber.classList.add("is-invalid");
    document
      .getElementById("register-phone-number-input")
      .classList.remove("d-none");
    document.getElementById("register-phone-number-input").innerHTML =
      errorArr.join("<br>");
    phoneNumberOk = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () =>
  (RegisterBtn.disabled = !(
    firstNameOk &&
    lastNameOk &&
    emailOk &&
    passwordOk &&
    rePasswordOk &&
    streetOk &&
    stateOk &&
    zipCodeOk &&
    cityOk &&
    countryOk &&
    houseNumberOk &&
    phoneNumberOk
  ));

RegisterBtn.addEventListener("click", () => {
  if (
    !(
      firstNameOk &&
      lastNameOk &&
      emailOk &&
      passwordOk &&
      rePasswordOk &&
      streetOk &&
      stateOk &&
      zipCodeOk &&
      cityOk &&
      countryOk &&
      houseNumberOk &&
      phoneNumberOk
    )
  ) {
    //if someone changed the html from dev tools
    return;
  }
  let users = localStorage.getItem("users");
  let nextUserId = localStorage.getItem("nextUserId");
  nextUserId = +nextUserId;
  let newUser = new User(
    nextUserId++,
    inputFirstName.value,
    inputLastName.value,
    inputEmail.value,
    inputPassword.value,
    inputStreet.value,
    inputState.value,
    inputZipCode.value,
    inputCity.value,
    inputCountry.value,
    inputHouseNumber.value,
    inputPhoneNumber.value,
    BusinessButton.checked
  );
  localStorage.setItem("nextUserId", nextUserId + "");
  if (!users) {
    //the first user
    users = [newUser];
    // let user = new User(inputName.value, inputEmail.value, inputPassword.value);
    // users = [user]
    localStorage.setItem("users", JSON.stringify(users));
    /*
      JSON.stringify(users) - convert array of objects to string
      localStorage.setItem - store the json string to localStorage with 
        key users 
        and value users as json string
    */
  } else {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    // console.log("users from localStorage", users);
    for (let user of users) {
      if (user.email === inputEmail.value) {
        //display msg - email already exists
        showToast("Email already exists", false);
        return;
      }
    }
    //user provided new email
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));
  }
  handlePageChange(PAGES.LOGIN);
});
