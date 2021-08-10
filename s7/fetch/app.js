document.getElementById('get-text').addEventListener('click', getText)
document.getElementById('get-json').addEventListener('click', getJSON)

// Get local Text file.
function getText() {
  fetch('test.txt')
    .then((res) => {
      // console.log(res); // 200
      return res.text();
    })
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
    .then(res => {
      return res.json();
    })
    .then(data => {
      let output = ''
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    })
}