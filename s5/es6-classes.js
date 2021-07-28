class Person {
  constructor(fN, lN, dob) {
    this.firstName = fN;
    this.lastName = lN;
    this.dob = new Date(dob);
  }

  greeting() {
    return `Hello, ${this.firstName} we're glad you made it here safe.`
  }

  calcAge() {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
    console.log(`CONGRATS! You're now married and your last name is now: ${this.lastName} `);
  }

  //Standalone method.
  static addChildren(x, y) {
    return x + y;
  }
}

const yel = new Person('Yel', 'Moringa', '1995-01-01');
console.log(yel.lastName);
console.log(yel.calcAge());
yel.getsMarried('Ylang');
console.log(Person.addChildren(1, 3)); // 4