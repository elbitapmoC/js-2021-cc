// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Tooda-looo!');

// Prompt
// prompt('We noticed you slowing down, would you like to take a break?');

// Confirm
// if (confirm('We noticed you slowing down, would you like to take a break?')) {
//   console.log('Lunch Time!');
// } else console.log('Let me know when you\'re ready..')

let val;

// Outer Height & Width
// console.log(`Window OUTER Height: ${window.outerHeight}`);
// console.log(`Window OUTER Weight: ${window.outerWidth}`)

// Inner Height & Width
// console.log(`Window INNER Height: ${window.innerHeight}`);
// console.log(`Window INNER Weight: ${window.innerWidth}`)

// Scroll Points
// val = window.scrollY;

// Location Object
val = window.location;  //href, port, host, etc.

// History Object
// val = window.history.go(-2); // Takes users back 2 pages.
val = window.history;

// Navigator Object
val = window.navigator
// platform
// appCodeName
// clipboard
// and so much more.

console.log(val)