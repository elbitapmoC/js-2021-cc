let val;
// Primitive Data Types
// --------------------
val = "ace";// String
val = 11 //  Number
val = true // Boolean
val = null // Null
val = undefined // undefined
// val = Symbol('🔥').toString() // converts Symbol to String
val = Symbol();
console.log(`${typeof val} ${val} `)

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

// console.log(typeof person)
// console.log(Date());
// const y = new Date();
// console.log(typeof y);
