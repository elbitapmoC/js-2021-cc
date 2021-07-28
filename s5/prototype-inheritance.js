// Create Person constructor.
// Have it accept firstName, lastName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// Create a prototype function (Greeting)
Person.prototype.greeting = function () {
  return console.log(`Hey there, ${this.firstName}! So so glad you could make it!`);
}

// Create customer constructor
// Accepts firstName, lastName, phone, membership
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone
  this.membership = membership
}
Customer.prototype.greeting = function () {
  return console.log(`Hey there, ${this.firstName}! Welcome to our company!`);
}
// initialize an instance of Person
let person1 = new Person('Eva', 'Mendes');
let cust1 = new Customer('Yel', 'Pel', '555-555-5555', 'Emerald')
person1.greeting();
cust1.greeting();












// const User = function (email, name) {
//   this.email = email
//   this.name = name
//   this.online = true
// }

// const Admin = function (...args) {
//   User.apply(this, args);
//   this.admin = true
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function (u) {
//   users = users.filter((user) => {
//     return user.name != u;
//   })
// }

// User.prototype.login = function () {
//   console.log(`Hellooo.. ${this.name}!`);
// }

// User.prototype.logout = function () {
//   console.log("Buh bye now.");
// }

// let userOne = new User('uno@ace.com', 'Ventura').login();
// let userTwo = new User('dos@eagle.com', 'Hawkeye').login();
// let adminOne = new Admin('power@yah.com', 'APTYTH');
// let users = [userOne, userTwo, adminOne];
// adminOne.deleteUser('Ventura')
