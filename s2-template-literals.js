const person = {
  fName: 'Zip',
  age: '28',
  job: 'Software Engineer',
  city: 'Miami'
}

function hello() {
  return "WAZZAAAAAPPPP!"
}

html = `
  <ul>
  <li>Name: ${person.fName}</li>
  <li>Age: ${person.age > 30 ? 'Over 30' : 'Under 30'} years old</li>
  <li>City: ${person.city}</li>
  <li>Role: ${person.job}</li>
  <li>${hello()}</li>
</ul>
`

document.body.innerHTML = html;