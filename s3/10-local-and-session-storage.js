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
  let tasks;
  let task = document.getElementById('task').value; //Store user input
  // check local storage to see if there's any saved tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []; //initialize an empty array since user has an empty task list.
  } else {
    // Append to tasks array.
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task); // Adding user input (task) into an array of tasks

  localStorage.setItem('tasks', JSON.stringify(tasks)); // Placing the new task entered into local storage.
  e.preventDefault()
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
  console.log(task);
});
