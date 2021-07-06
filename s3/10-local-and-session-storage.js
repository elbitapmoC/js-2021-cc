// set local storage item
// localStorage.setItem('phone', '444');
// localStorage.setItem('name', 'Ace');
// localStorage.setItem('age', 1);

// set session storage item
// sessionStorage.setItem('phone', 'home');

// remove locally stored item
// localStorage.removeItem('phone');
// sessionStorage.removeItem('key');

// We can clear the values of each items within our local storage.
// localStorage.clear();

// Add event listener to the form, be on the look out for when user submits their input
document.querySelector('form').addEventListener('submit', addUserInput);

function addUserInput(e) {
  let userInput = document.getElementById('task').value; //Store user input

  // check local storage to see if there's any saved tasks
  // if not, initialize an empty array
  // otherwise add on to the current array
  // will be stored as a string, so we will need to parse this string to JSON Object to use

  // add user task to array of tasks

  // in local storage, set the tasks key to the array
  // you will have to convert this json object to a string.

  // lets double check, the things are correct...
  // get what we just stored in local storage and display each task.

  e.preventDefault()
}