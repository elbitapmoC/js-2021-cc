let items;
// items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0])

// items[0].style.backgroundColor = 'pink';
// items[3].textContent = 'pink';

// const listOfItems = document.querySelector('ul').getElementsByClassName('collection-item'); // ul collection-item
// console.log(listOfItems)

// gEBTN returns a live node list.
// can be useful(you can query once, store the value, and have it update as the DOM changes)
// Does same as above (line 2-4)
let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);

// lis.style.color = 'pink'; // We can not do this.
lis[0].style.color = 'purple'; // Has to be targeted directly.
lis[0].textContent = 'li[0]'; // Has to be targeted directly.

// HTML COLLECTION -> Array
let arr = [...lis];
// arr = Array.from(lis);

// Reverse array
// Keep in mind, because we're using gEBTN, the node list here will also update.
// Meaning arr will show same as arr.reverse()
console.log(arr.reverse());

// document.querySelectorAll
const allItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(allItems)

allItems.forEach((item, index) => {
  item.textContent = (`#${index + 1} Hello`)
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((item) => {
  item.style.backgroundColor = (`lightgray`)
})
