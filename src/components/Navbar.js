import checkIfAdmin from "../utils/checkIfAdmin.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextId from "../utils/getNextId.js";

let nextId;
let isAdmin;
let isConnected;
let showPopup;

let navAddNewPictureLink;

const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");

const initializeNavbar = (showPopupFromApp) => {
  nextId = getNextId();
  isAdmin = checkIfAdmin();
  isConnected = checkIfConnected();
  if (isConnected) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
  }
  showPopup = showPopupFromApp;
  /* nav */
  navAddNewPictureLink = document.getElementById("nav-add-new-picture-link");
  if (!isAdmin) {
    navAddNewPictureLink.classList.add("d-none");
  }
  navAddNewPictureLink.addEventListener("click", () => {
    showPopup();
  });
};

export default initializeNavbar;
