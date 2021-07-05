// Create an element(li)
const li = document.createElement('li');

// Add a class to above element
li.className = 'collection-item';

// Add an id (new-item)
li.id = 'new-item';

// Add an attribute - ('title', 'New Item')
li.setAttribute('title', 'new-item');

// Create text node and append it to the li
li.appendChild(document.createTextNode('Helloooo Nurse!'));

// variable(link) to store a createElement (a)
const link = document.createElement('a');

// Add approprate classes to above link - 'delete-item secondary-content'
link.className = 'delete-item secondary-content'

// Add html ('<i class="fa fa-remove"></i>') to link
link.innerHTML = '<i class="fa fa-remove"></i>';

// Add link to li
li.appendChild(link);

// Add li as a child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li)