let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

// Get child nodes
val = list.childNodes; // Nodelist (11)
val = list.childNodes[0];
val = list.childNodes[0].nodeName; // #text
val = list.childNodes[0].nodeType; // 3

// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document
// 10 - Doctype

// Get children elements
val = list.children //HTMLCollection

// Get the id of a [0].[1]grandchild
val = list.children[1].children[0].id

// First Child
val = list.firstChild;

// Last Child
val = list.lastChild

// Count Child elements
val = list.childElementCount;

// Get parent node
val = list.parentNode
// Get parent element
val = list.parentElement
// Get the grandparent (parent of a parent)
val = list.parentElement.parentElement

// Get next sibling
val = list.nextSibling
val = list.nextElementSibling
// Get previous sibling
val = list.previousSibling
val = list.previousElementSibling
console.log(val)