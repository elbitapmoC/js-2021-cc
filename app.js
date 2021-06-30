let val;
const taskTitle = document.getElementById('task-title');

// Getting Things From the Element
val = taskTitle;
val = taskTitle.id; // task-title
// val = document.getElementById('task-title').className; //empty

// Change styling of an Element
taskTitle.style.color = 'lavender';
taskTitle.style.backgroundColor = 'black';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'inline-block';

// Change content
taskTitle.textContent = 'Text Content';
taskTitle.innerText = 'Inner Text..'
taskTitle.innerHTML = '<h6>innerHTML</h6>'

// Query Selector
document.querySelector('li').style.color = 'red'; // Gets the first element (li)
val = document.querySelector('li'); // Gets the first element (li)

console.log(val);