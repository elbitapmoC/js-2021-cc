const num1 = 100;
const num2 = 50;
let val;

// Simple math
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2; // Modulus, returns the remaining number.

// Math Object
val = Math.PI;
val = Math.round(2.5); // 3
val = Math.round(2.4); // 2
val = Math.ceil(2.1); // 3 - Rounds up to the next largest integer
val = Math.floor(2.1) // 2 - Rounds down
val = Math.sqrt(16); // 4
val = Math.abs(-444); // 444
val = Math.pow(7, 3) // (7*7*7) = 343
val = Math.min(948, 54, 63, 5, 7, 878, 54, 57, 23, 24, 5, 4, -1);
val = Math.max(948, 54, 63, 5, 7, 878, 54, 57, 23, 24, 5, 4, -1);
val = Math.random(); // Generates a random number from 0 to 1 (for example: 0.2858934643822625)
val = Math.random() * 20; // Generates a random number from 0 to 19
val = Math.round(Math.random() * 151); // Generates a random number from 0 to 19

console.log(val)
