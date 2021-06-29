// FOR LOOP
// for (let index = 0; index < 100; index++) {
//   if (index === 1) {
//     console.log('Strive for de best!')
//     continue;
//   }
//   if (index === 28)
//     console.log(index);
// }

// WHILE LOOP
// let i = 0;
// while (i < 10) {
//   console.log(`While:${i}`);
//   i++;
// }

// DO WHILE LOOP
// i = 0;
// do {
//   console.log(`Do While: ${i}`);
//   i++;
// }
// while (i < 10);

// CARS
electricCars = ['Model Y', 'Mach-E', 'e-Tron', 'Polestar 2', 'I-PACE', 'Kona'];

// FOREACH - This can take in 3 arguments, (iterator, index, array)
// array being the entire variable electricCars from above that stores our collection of data.
electricCars.forEach((car, i) => {
  console.log(`Index: #${i} ${car}`);
});

// MAP

// Create an array of objects
const books = [
  {
    id: 1,
    book: 'Huckleberry Fin'
  }, {
    id: 2,
    book: 'Huckleberry Fan'
  }, {
    id: 3,
    book: 'Huckleberry Fon'
  }, {
    id: 4,
    book: 'Huckleberry Fen'
  }, {
    id: 5,
    book: 'Huckleberry Fixin'
  },
]

// store returned id's from array inside a variable.
const ids = books.map((book) => {
  return book.id;
})

// print out the ids.
console.log(ids);

// Checks to see if an object is empty or not.
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const foundation = {
  GEN: true,
  EXO: false,
  LEV: false,
  NUM: false,
  DEU: false
}
let unfinished = {};

for (const book in foundation) {
  if (foundation[book] === true) console.log('Good stuff!');
  else unfinished[book] = foundation[book];
}
// If the object passed (unfinished) is NOT empty, then user get's message to keep on going.
if (!isEmpty(unfinished)) {
  console.log('Keep Studying, our foundation is crucial.');
}

for (const x in unfinished) {
  console.log(x)
}