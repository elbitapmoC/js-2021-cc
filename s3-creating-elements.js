// Create an element
const li = document.createElement('li');

// Add a claass
li.className = 'collection-item'

// Add an id
li.id = 'new-item'

// Add an attribute
li.setAttribute('title', 'New Item')

// Create text node and append
li.appendChild(document.createTextNode('Hello World'))

// Create a new link element
const link = document.createElement('a');

// Add approprate classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as a child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li)