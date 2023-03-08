import validateEmail from "../validation/validateEmail.js";
import validateFirstName from "../validation/validateFirstName.js";
import validateStreet from "../validation/validateStreet.js";
import validateState from "../validation/validateState.js";
import validateZipCode from "../validation/validateZipCode.js";
import validateName from "../validation/validateName.js";

import showToast from "../services/Toast.js";

const inputFirstName = document.getElementById("first-name-edit-user-field");
const inputLastName = document.getElementById("last-name-edit-user-field");
const inputState = document.getElementById("state-edit-user-field");
const inputCountry = document.getElementById("country-edit-user-field");
const inputCity = document.getElementById("city-edit-user-field");
const inputStreet = document.getElementById("street-edit-user-field");
const inputHouseNumber = document.getElementById("house-edit-user-field");
const inputZipCode = document.getElementById("zip-edit-user-field");
const inputEmail = document.getElementById("email-edit-user-field");
const inputPhone = document.getElementById("phone-edit-user-field");
const isBiz = document.getElementById("isBiz-edit-user-field");
const btnProfile = document.getElementById("submit-edit-user-btn");

let firstNameOk = true;
let lastNameOk = true;
let stateOk = true;
let countryOk = true;
let cityOk = true;
let streetOk = true;
let houseNumberOk = true;
let zipCodeOk = true;
let emailOk = true;
let phoneOk = true;

window.addEventListener("load", () => {
  let users = localStorage.getItem("users");
  let token = localStorage.getItem("token");
  if (users && token) {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    token = JSON.parse(token);
    let user = users.find((item) => item.id === token.id);
    if (user) {
      inputFirstName.value = user.firstname;
      inputLastName.value = user.lastname;
      inputState.value = user.state;
      inputCountry.value = user.country;
      inputCity.value = user.city;
      inputStreet.value = user.street;
      inputHouseNumber.value = user.housenumber;
      inputZipCode.value = user.zipcode;
      inputEmail.value = user.email;
      inputPhone.value = user.phonenumber;
      isBiz.checked = user.isAdmin;
    }
  }

  //when page loaded
  if (inputFirstName.value !== "") {
    checkFirstNameInput();
  }
  if (inputLastName.value !== "") {
    checkLastNameInput();
  }
  if (inputState.value !== "") {
    checkStateInput();
  }
  if (inputCountry.value !== "") {
    checkCountryInput();
  }
  if (inputCity.value !== "") {
    checkCityInput();
  }
  if (inputStreet.value !== "") {
    checkStreetInput();
  }
  if (inputHouseNumber.value !== "") {
    checkHouseNumberInput();
  }
  if (inputZipCode.value !== "") {
    checkZipCodeInput();
  }
  if (inputEmail.value !== "") {
    checkEmailInput();
  }
  if (inputPhone.value !== "") {
    checkPhoneinput();
  }
});

inputFirstName.addEventListener("input", () => {
  checkFirstNameInput();
});

inputLastName.addEventListener("input", () => {
  checkLastNameInput();
});

inputState.addEventListener("input", () => {
  checkStateInput();
});

inputCountry.addEventListener("input", () => {
  checkCountryInput();
});

inputCity.addEventListener("input", () => {
  checkCityInput();
});

inputStreet.addEventListener("input", () => {
  checkStreetInput();
});

inputHouseNumber.addEventListener("input", () => {
  checkHouseNumberInput();
});

inputZipCode.addEventListener("input", () => {
  checkZipCodeInput();
});

inputEmail.addEventListener("input", () => {
  checkEmailInput();
});

inputPhone.addEventListener("input", () => {
  checkPhoneinput();
});

const checkFirstNameInput = () => {
  let errorArr = validateName(inputFirstName.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0) {
    //the text is ok
    inputFirstName.classList.remove("is-invalid");
    document
      .getElementById("first-name-edit-user-error-span")
      .classList.add("d-none");
    firstNameOk = true;
  } else {
    //the text is not ok
    inputFirstName.classList.add("is-invalid");
    document
      .getElementById("first-name-edit-user-field")
      .classList.remove("d-none");
    document.getElementById("first-name-edit-user-field").innerHTML =
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
    document
      .getElementById("last-name-edit-user-error-span")
      .classList.add("d-none");
    lastNameOk = true;
  } else {
    //the text is not ok
    inputLastName.classList.add("is-invalid");
    document
      .getElementById("last-name-edit-user-field")
      .classList.remove("d-none");
    document.getElementById("last-name-edit-user-field").innerHTML =
      errorArr.join("<br>");
    lastNameOk = false;
  }
  checkIfCanEnableBtn();
};

const checkStateInput = () => {
  let errorArr = validateState(inputState.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputState.value == "") {
    //the text is ok
    inputState.classList.remove("is-invalid");
    document
      .getElementById("state-edit-user-error-span")
      .classList.add("d-none");
    stateOk = true;
  } else {
    //the text is not ok
    inputState.classList.add("is-invalid");
    document.getElementById("state-edit-user-field").classList.remove("d-none");
    document.getElementById("state-edit-user-field").innerHTML =
      errorArr.join("<br>");
    stateOk = false;
  }
  checkIfCanEnableBtn();
};

const checkCountryInput = () => {
  let errorArr = validateFirstName(inputCountry.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputCountry.value == "") {
    //the text is ok
    inputCountry.classList.remove("is-invalid");
    document
      .getElementById("country-edit-user-error-span")
      .classList.add("d-none");
    countryOk = true;
  } else {
    //the text is not ok
    inputCountry.classList.add("is-invalid");
    document
      .getElementById("country-edit-user-field")
      .classList.remove("d-none");
    document.getElementById("country-edit-user-field").innerHTML =
      errorArr.join("<br>");
    countryOk = false;
  }
  checkIfCanEnableBtn();
};

const checkCityInput = () => {
  let errorArr = validateFirstName(inputCity.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputCity.value == "") {
    //the text is ok
    inputCity.classList.remove("is-invalid");
    document
      .getElementById("city-edit-user-error-span")
      .classList.add("d-none");
    cityOk = true;
  } else {
    //the text is not ok
    inputCity.classList.add("is-invalid");
    document.getElementById("city-edit-user-field").classList.remove("d-none");
    document.getElementById("city-edit-user-field").innerHTML =
      errorArr.join("<br>");
    cityOk = false;
  }
  checkIfCanEnableBtn();
};

const checkStreetInput = () => {
  let errorArr = validateStreet(inputStreet.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputStreet.value == "") {
    //the text is ok
    inputStreet.classList.remove("is-invalid");
    document
      .getElementById("street-edit-user-error-span")
      .classList.add("d-none");
    streetOk = true;
  } else {
    //the text is not ok
    inputStreet.classList.add("is-invalid");
    document
      .getElementById("street-edit-user-field")
      .classList.remove("d-none");
    document.getElementById("street-edit-user-field").innerHTML =
      errorArr.join("<br>");
    streetOk = false;
  }
  checkIfCanEnableBtn();
};

const checkHouseNumberInput = () => {
  let errorArr = validateZipCode(inputHouseNumber.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputHouseNumber.value == "") {
    //the text is ok
    inputHouseNumber.classList.remove("is-invalid");
    document
      .getElementById("house-edit-user-error-span")
      .classList.add("d-none");
    houseNumberOk = true;
  } else {
    //the text is not ok
    inputHouseNumber.classList.add("is-invalid");
    document.getElementById("house-edit-user-field").classList.remove("d-none");
    document.getElementById("house-edit-user-field").innerHTML =
      errorArr.join("<br>");
    houseNumberOk = false;
  }
  checkIfCanEnableBtn();
};

const checkZipCodeInput = () => {
  let errorArr = validateZipCode(inputZipCode.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputZipCode.value == "") {
    //the text is ok
    inputZipCode.classList.remove("is-invalid");
    document.getElementById("zip-edit-user-error-span").classList.add("d-none");
    zipCodeOk = true;
  } else {
    //the text is not ok
    inputZipCode.classList.add("is-invalid");
    document.getElementById("zip-edit-user-field").classList.remove("d-none");
    document.getElementById("zip-edit-user-field").innerHTML =
      errorArr.join("<br>");
    zipCodeOk = false;
  }
  checkIfCanEnableBtn();
};

const checkEmailInput = () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    //the text is ok
    inputEmail.classList.remove("is-invalid");
    document
      .getElementById("email-edit-user-error-span")
      .classList.add("d-none");
    emailOk = true;
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("email-edit-user-field").classList.remove("d-none");
    document.getElementById("email-edit-user-field").innerHTML =
      errorArr.join("<br>");
    emailOk = false;
  }
  checkIfCanEnableBtn();
};

const checkPhoneinput = () => {
  let errorArr = validateZipCode(inputPhone.value);
  //   console.log(reg.test(inputName.value));
  if (errorArr.length === 0 || inputPhone.value == "") {
    //the text is ok
    inputPhone.classList.remove("is-invalid");
    document
      .getElementById("phone-edit-user-error-span")
      .classList.add("d-none");
    phoneOk = true;
  } else {
    //the text is not ok
    inputPhone.classList.add("is-invalid");
    document.getElementById("phone-edit-user-field").classList.remove("d-none");
    document.getElementById("phone-edit-user-field").innerHTML =
      errorArr.join("<br>");
    phoneOk = false;
  }
  checkIfCanEnableBtn();
};

const checkIfCanEnableBtn = () =>
  (btnProfile.disabled = !(
    firstNameOk &&
    lastNameOk &&
    emailOk &&
    streetOk &&
    stateOk &&
    zipCodeOk &&
    cityOk &&
    countryOk &&
    houseNumberOk &&
    phoneOk
  ));

btnProfile.addEventListener("click", () => {
  if (
    !(
      firstNameOk &&
      lastNameOk &&
      emailOk &&
      streetOk &&
      stateOk &&
      zipCodeOk &&
      cityOk &&
      countryOk &&
      houseNumberOk &&
      phoneOk
    )
  ) {
    //if someone changed the html from dev tools
    return;
  }
  let users = localStorage.getItem("users");
  let token = localStorage.getItem("token");
  if (users && token) {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    token = JSON.parse(token);
    let userEmail = users.find((item) => item.email === inputEmail.value);
    let user = users.find((item) => item.id === token.id);
    if (userEmail && user.id !== userEmail.id) {
      //the email already token
      showToast("The email already taken", false);
      return;
    }
    if (user) {
      user.firstname = inputFirstName.value;
      user.lastname = inputLastName.value;
      user.email = inputEmail.value;
      user.street = inputStreet.value;
      user.state = inputState.value;
      user.zipcode = inputZipCode.value;
      user.city = inputCity.value;
      user.country = inputCountry.value;
      user.housenumber = inputHouseNumber.value;
      user.phonenumber = inputPhone.value;
      user.isAdmin = isBiz.checked;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem(
        "token",
        JSON.stringify({
          id: user.id,
          name: user.firstname + " " + user.lastname,
          email: user.email,
          isAdmin: user.isAdmin,
        })
      );

      showToast("Saved");
    }
  }
  setTimeout(() => {
    location.reload();
  }, 3000);
});
