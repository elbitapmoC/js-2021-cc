// var avatar = 'PB & J';
// avatar = 'Steve Madden'
// console.log(avatar);

// //Initialize var
// var initialVar;
// console.log(initialVar); //undefined
// initialVar = 'Howdy Cow-girl';
// console.log(initialVar);

// //Multi-word variables
// var firstname; //lower case
// var first_name; //Underscore
// var firstName; //Camel case - USE THIS
// var FirstName; //PascalCase - Utilize w/ Classes and Constructor functions

// LET
// let avatar = 'PB & J';
// avatar = 'Steve Madden'
// console.log(avatar);

// CONST
const avatar = 'PB & J';
// avatar = 'Steve Madden' //We can NOT reasign a value w/ const variables.
console.log(avatar);

// CONST object variables, the information within can be changed around, same with Arrays.
const glasses = {
  sunGlasses: true,
  waterGlasses: false,
  readingGlasses: true,
  lost: true
}
glasses.sunGlasses = false;
console.log(glasses);