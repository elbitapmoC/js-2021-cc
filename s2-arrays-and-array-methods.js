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

let val

val = person.fN;
val = person['fN'];
val = person.hobbies[4]
val = person.getBirthYear();

for (let i = 0; i < person.hobbies.length; i++) {
  console.log(person.hobbies[i]);
}

console.log(val)