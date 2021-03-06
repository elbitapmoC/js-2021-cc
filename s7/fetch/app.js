document.getElementById('get-text').addEventListener('click', getText)
document.getElementById('get-json').addEventListener('click', getJSON)
document.getElementById('get-api').addEventListener('click', getExternalApiData)

// Get local Text file.
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = `<aside>${data}</aside>`
    })
    .catch(err => {
      console.log(err);
    })
}

// Get Local JSON data
function getJSON() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let output = ''
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err); //If we didn't have this, the error message will say uncaught
    })
}

// Get Local JSON data
function getExternalApiData() {
  console.log('external');
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = ''
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}