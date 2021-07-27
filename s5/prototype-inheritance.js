const User = function (email, name) {
  this.email = email
  this.name = name
  this.online = true
}

const Admin = function (...args) {
  User.apply(this, args);
  this.admin = true
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.name != u;
  })
}

User.prototype.login = function () {
  console.log(`Hellooo.. ${this.name}!`);
}

User.prototype.logout = function () {
  console.log("Buh bye now.");
}

let userOne = new User('uno@ace.com', 'Ventura');
let userTwo = new User('dos@eagle.com', 'Hawkeye');
let adminOne = new Admin('power@yah.com', 'APTYTH');
let users = [userOne, userTwo, adminOne];
adminOne.deleteUser('Ventura')
