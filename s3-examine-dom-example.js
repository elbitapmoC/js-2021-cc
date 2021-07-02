let val;

// What's in the head?
val = document.head;

// What doctype is it?
val = document.doctype;

// Get domain
val = document.domain;

// Get URL
val = document.URL;

// Get charset
val = document.charset;

// Get content type
val = document.contentType;

// Checkout the document
val = document;

// Checkout all elements within the document
val = document.all;

// Checkout a specific element within all the document
val = document.all[5]; // materialize

// Get the length of the elements within the document
val = document.all.length

// What's in the body?
val = document.body;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id; //task-form
val = document.forms[0].method; // GET || POST
val = document.forms[0].action; // Forms usually have an action, the action will appear here.

val = document.links;

val = document.links[5];
val = document.links[0].id;

val = document.links[5].className;
val = document.links[5].classList;
val = document.links[5].classList[0];
// val = document.links.length; // 6

val = document.images; // 0

val = document.scripts;
// val = document.scripts.length;
// val = document.scripts[2].src;
// val = document.scripts[2].getAttribute('src');

let scripts = document.scripts; // HTML Collection
scriptsArr = Array.from(scripts); //Converts HTML Collection to an Array
// Print out the source for each element within the scriptsArr
scriptsArr.forEach((script) => {
  console.log(script.getAttribute('src'));
});

// console.log(val);