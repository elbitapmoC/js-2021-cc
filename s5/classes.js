class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.fruits = 0
  }
  login() {
    console.log(`Hellooo.. ${this.name}!`);
    return this
  }
  logout() {
    console.log("Buh bye now.");
    return this
  }
  updateFruitsEatten() {
    this.fruits++
    if (this.fruits <= 1) {
      console.log(`We're just getting started... you ate ${this.fruits} so far`);
    } else if (this.fruits > 1 && this.fruits < 5) console.log(`Good Stuff!... you ate ${this.fruits} so far`);
    else console.log("We got a rockstar amongst us.");
    return this
  }
}

// Inheritance
class Admin extends User {
  deleteUser(user) {
    currentUsers = currentUsers.filter(u => {
      return u.email != user.email
    })
  }
}

let userOne = new User('uno@ace.com', 'Ventura');
let userTwo = new User('dos@eagle.com', 'Hawkeye');
let adminOne = new Admin('me@admin.com', 'X');

userOne.login().updateFruitsEatten().updateFruitsEatten().logout();
let currentUsers = [userOne, userTwo, adminOne];
adminOne.deleteUser(userOne);

console.log(currentUsers);
