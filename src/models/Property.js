class Property {
  id;
  name;
  credit;
  price;
  description;
  imgUrl;
  constructor(id, name, price, description, imgUrl, credit) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
    this.credit = credit;
  }
}
export default Property;
