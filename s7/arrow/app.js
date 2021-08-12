// Standard
// const sayHello = () => {
//   console.log('Hello!');
// }

// const sayHello = () => {
//   console.log("Hello!");
// }

// Single line functions don't req. braces
// const sayHello = () => "Hello";

// Return Object literal..
// When returning an object, make sure wrap it in parenthesis
// const sayHello = () => ({ msg: 'Hello' })

// If it's a single param, we don't need ()
// const sayHello = name => console.log(`Hello ${name}`)

// Multiple params need ()
// const sayHello = (fN, lN) => console.log(`Oh it's, ${fN} ${lN}! Welcome back, we're glad to see you.`)
// sayHello("Morty", "Rick");

const users = ['Matthew', 'Mark', 'Luke', 'John']
const nameLengths = users.map(user => user);
console.log(nameLengths);