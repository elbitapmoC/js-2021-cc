const form = document.querySelector('form');// create a variable to store form
const taskInput = document.getElementById('task');// create a variable to store input from user
const heading = document.querySelector('h5');// create a variable to store h5

// taskInput.value = ''; // Clear input

// form.addEventListener('submit', runEvent) // Add event listener to when user submits form

// -KEYBOARD INPUT EVENTS-
// keydown
// keyup
// keypress
// focus
// blur 
// cut
// undo
// paste
// input
// change - this we would use inside a drop down menu.
taskInput.addEventListener('focus', runEvent)// Add event listener to input, when user types a character

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.innerText = e.target.value; //Update the heading w/ the user input

  // e.preventDefault();
}