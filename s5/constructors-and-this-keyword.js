// Regular object
// let name = {
//   first: 'Zel',
//   last: 'elbit',
//   age: 30
// }

// Constructor
function Person(name, dob) {
  this.name = name
  this.dob = new Date(dob)
  this.calcAge = () => {
    const diff = Date.now() - this.dob.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970)
  }
}

const zel = new Person('zel', '1993-04-01');

console.log(zel.calcAge());
