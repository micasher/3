import Property from "../models/Property.js";

let id = 1;
let nextUserId = 1;

const createData = () => {
  let propertiesArr = [
    new Property(
      id++,
      "Dog Biting hand sleeve",
      "1000$",
      `A dog biting hand sleeve is a specialized piece of equipment used in dog training to teach and develop a dog's biting skills. The sleeve is made of durable materials such as jute or synthetic fabrics and is designed to fit over a trainer's arm, providing a safe and controlled way for the dog to practice biting and grip strength.`,
      "./assets/imgs/1.jpg"
    ),
    new Property(
      id++,
      "Candy the Rottweiler",
      "450$",
      `Rottweilers are a popular breed of dog known for their loyalty and protective nature. They are often used in police work, search and rescue, and as family pets.`,
      "./assets/imgs/2.jpg"
    ),
    new Property(
      id++,
      "Lola the Malinois puppy",
      "250$",
      `Malinois puppies are a type of Belgian Shepherd dog breed. They are known for their high energy level, intelligence, and loyalty.`,
      "./assets/imgs/3.jpg"
    ),
    new Property(
      id++,
      "My Daily Job",
      "999$",
      `This was my daily routine with the children in my work place we took luna to travel`,
      "./assets/imgs/4.jpg"
    ),
    new Property(
      id++,
      "My Luna",
      "999999$",
      `My beutifoul dog in one of our dailty trips in the fields`,
      "./assets/imgs/5.jpg"
    ),
    new Property(
      id++,
      "Young Love",
      "250$",
      `This is one of the children that use to go out with me and luna to travel`,
      "./assets/imgs/6.jpg"
    ),
  ];
  return propertiesArr;
};

const setInitialData = () => {
  let properties = localStorage.getItem("props");
  if (properties) {
    return;
  }
  localStorage.setItem("props", JSON.stringify(createData()));
  localStorage.setItem("nextid", id + "");
  localStorage.setItem("nextUserId", nextUserId + "");
};

setInitialData();
