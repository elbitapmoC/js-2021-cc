// Primitive Data Types
// --------------------
const avatar = 'Johnny Applesed'
console.log(typeof avatar); // String
console.log(typeof 1)// Number
console.log(typeof true)// Boolean
console.log(typeof null)// Null
console.log(typeof x) //undefined
console.log(typeof Symbol()) //Symbol
// --------------------

// Reference Data Types - These are being accessed from memory AS a reference
// --------------------

// Array
const flavors = [
  'orange', 'peach', 'cherry', 'raspberry', 'kiwi', 'watermelon'
]

// Object literal
const person = {
  job: 'Web Master',
  hobbies: [
    '3D Animation',
    'Drawing',
    'Animation',
    'Motion',
    'Interactive Design',
    'Reading',
    'Guitar',
    'Piano',
    'App Dev',
    'Teaching'
  ],
  age: 20,
  state: 'Washington'
}

console.log(typeof person)
console.log(Date());
const y = new Date();
console.log(typeof y);
