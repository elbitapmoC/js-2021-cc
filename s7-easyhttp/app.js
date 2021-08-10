const http = new easyHTTP;

// Get ALL Posts.
// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//   if (err) console.log(err);
//   else console.log(posts);
// })

// Get A Single Post.
// http.get('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
//   if (err) console.log(err);
//   else console.log(post);
// })

//  Create Data
const data = {
  title: 'Custom | Post',
  body: 'Custom | Body'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
//   if (err) console.log(err);
//   else console.log(post);
// })

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, (err, post) => {
//   if (err) console.log(err);
//   else console.log(post);
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
  if (err) console.log(err);
  else console.log(post);
})