const fN = 'Ace';
const lN = 'Bandage';
const str = 'ThermoFlask... Get yourself ready we\'re about to enter into the wilderness!';
let val;

// Concatenation 
val = fN + ' ' + lN;

// Append
val = 'Hunter ';
val += 'X Hunter'

// Escaping
val = '"Peace & Safety"'

// Length
val = val.length;

// Concat
val = fN.concat(' ', lN);

// toUpper
val = fN.toUpperCase();

// toLower
val = fN.toLowerCase();

// Get a specific portion of our string.
val = fN[0]; // A

// indexOf()
val = fN.indexOf('e'); // 2

// lastIndexOf()
val = fN.lastIndexOf('A'); // 0

// charAt()
val = lN.charAt('3'); // d
// Get last character
val = lN.charAt(lN.length - 1);

// substring() 
val = lN.substring(0, 3) // Ban

// slice() - mostly used w/ Arrays.
// The special thing about slice is that we can use NEGATIVE numbers.
// val = lN.slice(0, 3) // Ban
val = lN.slice(-3) // When using negative it starts from the back, gets the last 3 characters (age)

// split() - can split a string into an array
// val = console.table(str.split(' ')); // [ "ThermoFlask...", "Get", "yourself", "ready", "we're", "about", "to", "enter", "into", "the", "wild" ]

// replace()
// val = fN.replace('Ace', 'Focusrite') // Focusrite

// includes() -  check to see if the string includes what you're searching for
val = str.includes('wild'); // True

console.log(val)
