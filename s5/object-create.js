// create Person object
const personProto = {
  greeting: function () {
    return `Welcome in, ${this.firstName}, make yourself at home.`
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
    console.log(`Congrats, you are now: ${this.firstName} ${this.lastName}!`);
  }
}

const mary = Object.create(personProto);
mary.firstName = 'Marrie'
mary.lastName = 'Moringa'
mary.getsMarried('Ylang')

const zel = Object.create(personProto, {
  firstName: { value: 'Zel' },
  lastName: { value: 'elbitapmoC' }
})
console.log(mary.greeting());
console.log(zel.greeting());