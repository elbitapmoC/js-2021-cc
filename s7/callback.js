const posts = [{
  title: 'Title 1',
  body: 'Post 1'
},
{
  title: 'Title 2',
  body: 'Post 2'
},
]

// function createPosts(post) {
//   setTimeout(() => {
//     posts.push(post)
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = ''
//     posts.forEach(post => {
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// Callback - Function passed into a function and can be used from that function.
function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach(post => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPosts({ title: 'Title 3', body: 'Post 3' }, getPosts);

console.log(posts);