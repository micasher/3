import validate from "./validate.js";
const validateHouseNumber = (value) => {
  const reg = new RegExp(/^[1-9]\d*(?: ?(?:[a-z]|[/-] ?\d+[a-z]?))?$/);
  return validate(reg, value, 2, 255).map((err) => `zip code is ${err}`);
};

export default validateHouseNumber;
