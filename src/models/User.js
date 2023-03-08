class User {
  id;
  firstname;
  lastname;
  email;
  password;
  street;
  state;
  zipcode;
  city;
  country;
  housenumber;
  phonenumber;
  isAdmin;
  constructor(
    id,
    firstname,
    lastname,
    email,
    password,
    street,
    state,
    zipcode,
    city,
    country,
    housenumber,
    phonenumber
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.street = street;
    this.state = state;
    this.zipcode = zipcode;
    this.city = city;
    this.country = country;
    this.housenumber = housenumber;
    this.phonenumber = phonenumber;
    this.isAdmin = false;
    this.id = id;
  }
}
export default User;
