// // Adding async to our function, returns a promise
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hellooo'), 1000);
//   });
//   error = false;
//   if (error) {
//     await Promise.reject(new Error('Something\'s not right here...'));
//   } else {
//     const res = await promise; //Waits until the promise is resolved
//     return res;
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

async function getUsers() {
  // Awaits the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceeds once it's resolved.
  const data = await response.json();

  // Only continue once the 2nd promise is resolved.
  return data;
}