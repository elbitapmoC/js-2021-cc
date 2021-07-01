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

// Query Selector - If there's more than 1, the first will be returned.
val = document.querySelector('.collection');
val = document.querySelector('#task-form');

document.querySelector('li').style.color = 'red'; // Gets the first element (li)
document.querySelector('ul li').style.color = 'purple'; // We can also nest (li)
document.querySelector('li:last-child').style.color = 'pink'; // Gets the last child element (li)
document.querySelector('li:nth-child(2)').style.color = 'orange'; // Gets the 2nd element (li)
document.querySelector('li:nth-child(odd)').style.backgroundColor = 'lavender';
document.querySelector('li:nth-child(even)').style.backgroundColor = '#ffefd1'; // Gets the 2nd element (li)

console.log(val);