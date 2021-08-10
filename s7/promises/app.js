const posts = [{
  title: 'Title 1',
  body: 'Post 1'
},
{
  title: 'Title 2',
  body: 'Post 2'
},
]

// Callback - Function passed into a function and can be used from that function.
function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = true;
      if (error) reject("Dang Daniel...");
      else resolve();
    }, 2000);
  });
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

createPosts({ title: 'Title 3', body: 'Post 3' }).then(getPosts).catch();

console.log(posts);