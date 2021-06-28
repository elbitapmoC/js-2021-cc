// --------------------
// FUNCTION DECLARATIONS
// --------------------
function getDate() {
  switch (new Date().getDay()) {
    case 0:
      return 'SUN';
    case 1:
      return 'MON';
    case 2:
      return 'TUE';
    case 3:
      return 'WED';
    case 4:
      return 'THUR';
    case 5:
      return 'Day of Prep | FRI';
    default:
      return 'Shabbat | SAT';
  }
}

// Johnny and Appleseed are default values.
function greet(fN = 'Johnny', lN = 'Appleseed') {
  return `Hey there ${fN} ${lN}`;
}
// console.log(greet('Chicken', 'Noodle'))

// --------------------
// FUNCTION EXPRESSIONS
// --------------------

let timesEight = function (x) {
  return x * 8;
}
// console.log(timesEight(8));

// IFFE - Immediately Invoked Function Expression
// ((name) => {
//   console.log(name)
// })('1st Poohdie'); // w/o expression

// ((name) => {
//   console.log(name)
// })('2nd Poohdie'); // w/ expression

// --------------------
// PROPERTY METHODS
// --------------------
methodsToUse = {
  add: (x, y) => {
    return (x + y)
  },
  sub: (x, y) => {
    return (x + y)
  }
}

//Adds property method to our methodsToUse object
methodsToUse.delete = function () {
  console.log('delete delete delete')
};

console.log(methodsToUse);
