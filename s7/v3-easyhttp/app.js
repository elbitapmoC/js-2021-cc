const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User data
const data = {
  name: 'Ahkal ban Yah',
  username: 'Sojo',
  email: 'ak@sojo.com'
}

// Post Users
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// PUT(Updating users data) Users
http.put('https://jsonplaceholder.typicode.com/users/3', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));


// DELETE User data
http.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(err => console.log(err));
