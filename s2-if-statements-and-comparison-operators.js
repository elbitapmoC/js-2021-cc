const person = {
  fN: 'Apple',
  lN: 'Macintosh',
  age: 45,
  email: 'me@apple.com',
  address: {
    city: 'Cupertino',
    state: 'California',
    country: 'U.S.',
    locale: '1 Apple Park Way'
  },
  hobbies: ['tech', 'cars', 'phones', 'subscriptions', 'networking'],
  getBirthYear: function () {
    return 2021 - this.age;
  }
}

let val = '100';

// equal to
if (val >= 100) console.log("You're spending too much.\nWe need to do better budgeting.");
else console.log("Good stuff, we're under 100")

// NOT equal to
if (val != 100) console.log("Bummer!");
else console.log("Rad dood!")

// equal to VALUE & TYPE
if (val === 100) console.log("You're spending too much.\nWe need to do better budgeting.");
else console.log("Good stuff, !100")

// NOT equal to VALUE & TYPE
if (val !== 100) console.log("Bummer!");
else console.log("Rad dood!")

// test undefined
if (typeof val === undefined) console.log("Undefined...");
else console.log("Defined!")

// great than
if (val > 100) console.log("greater than");
else if (val < 100) console.log("less than")
else console.log("Neither..")

// AND
if (val > 10 && val < 100) console.log('In between AND');
else console.log('False AND')

// OR
if (val > 10 || val <= 100) console.log('One is true OR');
else console.log('False OR')

// TERNARY
console.log(val === 100 ? 'Spot on!' : 'Nahh...')