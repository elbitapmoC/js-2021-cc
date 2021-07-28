class Person {
  constructor(fN, lN) {
    this.firstName = fN;
    this.lastName = lN;
  }

  greeting() {
    return `Hello there, ${this.firstName}`
  }
}

class Customer extends Person {
  constructor(fN, lN, phoneNum, membership) {
    super(fN, lN); //Calls the Parent class constructor
    this.phoneNumber = phoneNum;
    this.membership = membership;
  }

  static annualMembershipCost() {
    return 5000;
  }
}

const andrea = new Customer('Andrea', 'Valentina', '555-555-5550', 'Emerald');
console.log(andrea);
console.log(andrea.greeting());
console.log(Customer.annualMembershipCost())