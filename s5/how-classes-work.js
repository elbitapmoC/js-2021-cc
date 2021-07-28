function User(email, name) {
  this.email = email
  this.name = name
  this.online = false
}

User.prototype.login = function () {
  this.online = true
  console.log(`${this.email} logged in.`);
}

User.prototype.logout = function () {
  this.online = false
  console.log(`${this.email} logged out.`);
}

let userOne = new User('uno@ace.com', 'Ventura');
let userTwo = new User('dos@eagle.com', 'Hawkeye');

console.log(userOne);
userOne.login();