// Everything in JS is an object... objects have methods
let numbers = [9, 8, 7, 6, 1, 2, 3, 4, 5] // Array but..
// console.log(numbers); //Looking at this variable in the console, we see it has methods attached via <prototype>
console.log(numbers.sort());


// Object.prototype
// Person.prototype

function Person(fN, lN, dob) {
  this.first = fN
  this.last = lN
  this.dob = new Date(dob)
}

// Can't use arrow functions for prototypes...
Person.prototype.calcAge = function () {
  const diff = Date.now() - this.dob.getTime();
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970)
}

Person.prototype.getFullName = function () {
  return `${this.first} ${this.last}`
}

Person.prototype.getsMarried = function (newLastName) {
  return `${this.first} ${newLastName}`
}

const zel = new Person('Zel', 'Elbit', '1993-04-01');
const yel = new Person('Hungry', 'Hippo', '2000-01-01');

console.log(zel.calcAge());
console.log(zel.getFullName());
console.log(yel.getsMarried('Elbit'));