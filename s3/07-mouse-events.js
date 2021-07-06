const clearButton = document.querySelector('.clear-tasks');// Store clear tasks button
const card = document.querySelector('.card');// Store Card
const heading = document.querySelector('h5');// Store Tasks heading


// -EVENT HANDLER(function)-
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `X: ${e.offsetX} Y:${e.offsetY}`;
}

// -EVENT LISTENERS-
// Click
clearButton.addEventListener('click', runEvent);

// Double Click
clearButton.addEventListener('dblclick', runEvent);

// Mouse Down
clearButton.addEventListener('mousedown', runEvent);

// Mouse Up
clearButton.addEventListener('mouseup', runEvent);

// Mouse Enter
card.addEventListener('mouseenter', runEvent);

// Mouse Leave
card.addEventListener('mouseleave', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);
