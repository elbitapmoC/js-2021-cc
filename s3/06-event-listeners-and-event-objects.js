// Add event listener to button
// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//   console.log('clicked')
//   // e.preventDefault();
// });
let val;

function onClick(e) {
  // Event target element
  val = e;
  val = e.target;// target event
  val = e.target.id;// get event id
  val = e.target.className;//get event class name
  val = e.target.classList;// get event class list

  // Event type
  val = e.type;//get the type of event

  // Timestamp
  val = e.timeStamp;// track time on when user clicks event

  // Coordinates, relative to the window - (client)
  val = e.clientX;// X
  val = e.clientY;// Y

  // Coordinates, relative to the element itself - (offset)
  val = e.offsetX;// X
  val = e.offsetY;// Y

  console.log(val)
}
document.querySelector('.clear-tasks').addEventListener('click', onClick);
