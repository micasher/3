import validate from "./validate.js";
const validateZipCode = (value) => {
  const reg = new RegExp(/^[0-9]*$/);
  return validate(reg, value, 2, 255).map((err) => `zip code is ${err}`);
};

export default validateZipCode;
