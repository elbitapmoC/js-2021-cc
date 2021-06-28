const fruit = ['orange', 'apple', 'peach'];
const testNewArray = new Array(1, 2, 3, 4, 5, 6, 10, 20, 30, 40, 50, 100, 60, 63, 44, 102, 11);
const mixedFruit = [1, 2, true, false, { a: 1, b: 2 }, 'canon', new Date()];

let val;

// Get array length
// console.log(fruit.length)

// Check if an item is an array
// console.log(Array.isArray(fruit))

// Get a single value
val = fruit[2];
// console.log(val)

// insert into the array
fruit[0] = 'Mango';
// console.log(fruit)

// Find index of a value
// console.log(mixedFruit.indexOf('canon')); // 5

// MUTATING ARRAYS
// Add to the end 
fruit.push('Guava')
// Add to the front
fruit.unshift('Mamey')

// Take off from end
fruit.pop()
// Take off from front
fruit.shift();

// Splice values - Removes everything from 0 to 4, keeps the 5th element
// testNewArray.splice(0, 5)

// Reverse
testNewArray.reverse();

// concat
val = fruit.concat(testNewArray);

// sort
// val = testNewArray.sort(); // [1, 10, 100, 102, 11, 2, 20 ...]

// Sorting by utilizing compare function
// val = testNewArray.sort((x, y) => {
//   return x - y;
// });
// sorting from low to high.


// Sorting by utilizing compare function
// val = testNewArray.sort((x, y) => {
//   return y - x;
// });
// reversing our sort from high to low.

function under50(num) {
  return num < 50;
}

function over50(num) {
  return num > 50;
}


val = testNewArray.find(under50); // 11
val = testNewArray.find(over50); // 102

console.log(val);