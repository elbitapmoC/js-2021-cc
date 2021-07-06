const collectionOftasks = document.querySelector('ul');
let val;
// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', () => {
//   console.log('card-title..')
// })// event listener on card-title

// document.querySelector('.card-content').addEventListener('click', () => {
//   console.log('card-content..')
// })// event listener on card-title's parent (card-content)

// document.querySelector('.card').addEventListener('click', () => {
//   console.log('card..')
// })// event listener on card-content's parent (card)

// EVENT DELEGATION
// const deleteAddedItem = document.querySelector('.delete-item');
// deleteAddedItem.addEventListener('click', deleteItem);

document.querySelector('body').addEventListener('click', deleteItem);

function deleteItem(e) {
  console.log(e.target);
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete-item');
  // }

  // Use this one over the above b/c we can search for specific class
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }
  // Not finished, come back to
  else if (e.target.id === 'testClear') {
    if (confirm("Are you SUPER sure you want to delete your whole list?")) {
      console.log(collectionOftasks);
    } else console.log('No');
  }
}