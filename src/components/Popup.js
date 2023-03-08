import Property from "../models/Property.js";
import getNextId from "../utils/getNextId.js";
import validateImage from "../validation/validateImage.js";
let saveBtn = document.getElementById("editPropertiesPopupSaveBtn");
let selectedProperty, editProperty;
const editPropertiesPopupImgDisplay = document.getElementById(
  "editPropertiesPopupImgDisplay"
);
const editPropertiesPopupName = document.getElementById(
  "editPropertiesPopupName"
);
const editPropertiesPopupCredit = document.getElementById(
  "editPropertiesPopupCredit"
);
const editPropertiesPopupDescription = document.getElementById(
  "editPropertiesPopupDescription"
);
const editPropertiesPopupPrice = document.getElementById(
  "editPropertiesPopupPrice"
);
const editPropertiesPopupImg = document.getElementById(
  "editPropertiesPopupImg"
);
const editPropertiesPopup = document.getElementById("editPropertiesPopup");

const initPopup = (selectedPropertyFromHomePage, editPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  if (selectedPropertyFromHomePage) {
    selectedProperty = selectedPropertyFromHomePage;
  } else {
    selectedProperty = new Property(getNextId(), "", 0, "", "");
  }
  editProperty = editPropertyFromHomePage;
  editPropertiesPopupImgDisplay.src = selectedProperty.imgUrl;
  editPropertiesPopupName.value = selectedProperty.name;
  editPropertiesPopupDescription.value = selectedProperty.description;
  editPropertiesPopupPrice.value = selectedProperty.price;
  editPropertiesPopupImg.value = selectedProperty.imgUrl;
  editPropertiesPopupCredit.value = selectedProperty.credit;
  showPopup();
};

const showPopup = () => {
  editPropertiesPopup.classList.remove("d-none");
};

const hidePopup = () => {
  editPropertiesPopup.classList.add("d-none");
};

window.addEventListener("load", () => {
  editPropertiesPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editPropertiesPopup" &&
      ev.target.id !== "editPropertiesPopupCancelBtn" &&
      ev.target.id !== "editPropertiesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });
  saveBtn.addEventListener("click", () => {
    selectedProperty.name = editPropertiesPopupName.value;
    selectedProperty.description = editPropertiesPopupDescription.value;
    selectedProperty.price = editPropertiesPopupPrice.value;
    selectedProperty.imgUrl = editPropertiesPopupImg.value;
    selectedProperty.credit = editPropertiesPopupCredit.value;
    editProperty(selectedProperty);
    hidePopup();
  });
  editPropertiesPopupImg.addEventListener("input", () => {
    editPropertiesPopupImgDisplay.src = editPropertiesPopupImg.value;
    if (validateImage(editPropertiesPopupImg.value).length) {
      //has errors
      saveBtn.disabled = true;
      editPropertiesPopupImg.classList.add("is-invalid");
    } else {
      //no errors
      saveBtn.disabled = false;
      editPropertiesPopupImg.classList.remove("is-invalid");
    }
  });
});

export { initPopup, showPopup, hidePopup };
