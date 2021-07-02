let val;

// TO STRING
// ---------
// Num -> String
// val = String(555);
// val = String(4 + 4);
// To string(method)
// val = (555).toString();
// val = (4 + 4).toString();

// Bool to String
// val = String(true);
// To string(method)
// val = (true).toString();

// Date to String
// val = String(new Date());
// To string(method)
// val = (new Date()).toString();

// Array to string
// val = String(['guava', 'mint', 'baby bananas', 'mango'])
// To string(method)
// val = (['guava', 'mint', 'baby bananas', 'mango']).toString();

// Bool to String
// val = String(true);
// To string(method)
// val = (true).toString();

// TO NUMBER
// ---------
// val = Number('5');
// val = Number(true);
// val = Number(null);
// val = Number('Aloha') //NaN
// val = Number(['1', '2', '3'])

// // val = parseInt('123.654');
// val = parseFloat('28.25')

// Output
// console.log(val);
// console.log(typeof val)
// console.log(val.length)
// console.log(val.toFixed(2))

const val1 = String('1');
const val2 = 3;
let sum = val1 + val2;
console.log(sum)
console.log(Number(val1) + val2)
sum = Number(val1) + val2;
console.log(typeof sum)

