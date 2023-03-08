import validate from "./validate.js";
const validatePhoneNumber = (value) => {
  const reg = new RegExp(
    /^(\+?\d{0,2})?[\D]?\(?(\d{3})\)?[\D]?(\d{3})[\D]?(\d{4})$/
  );
  return validate(reg, value, 2, 255).map((err) => `zip code is ${err}`);
};

export default validatePhoneNumber;
