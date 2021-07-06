// REPLACE ELEMENT

// create element(newHeading) -h4
const newHeading = document.createElement('h4');

// Add id to newHeading
newHeading.id = 'task-title';

// Create a new text node inside newHeading
newHeading.appendChild(document.createTextNode('NEWWW'));

// Get the old heading
const oldHeading = document.querySelector('#task-title');

// Parent(cardAction)
const cardAction = oldHeading.parentElement;

// Replace oldHeading w/ newHeading inside parent
cardAction.replaceChild(newHeading, oldHeading);
// Create variable to store all li's
const lis = document.querySelectorAll('li');
// Create variable to store ul
const list = document.querySelector('ul');
// Remove list item (any number)
lis[4].remove();

// Remove child element from list
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

// CLASSES
// See classes inside an element
val = link.className; //Method 1
val = link.classList; //Method 2

// See the first class inside the link
val = link.classList[0];
val = link;

// console.log(val)
// Add a class inside link
link.classList.add('testing123');

// Remove the recently added class from link
link.classList.remove('testing123')

// ATTRIBUTES
// Reminder: link is List Item 1
link.getAttribute('href');
link.setAttribute('href', 'https://google.com') // Clicking the 'X' takes us to Google.
link.setAttribute('title', 'Google');
// Check to see if this element has a specific attribute
// val = link.hasAttribute('alt'); // false

console.log(val)



// console.log(cardAction.children[0]) // Test to see if the old heading was replaced w/ newHeading 
