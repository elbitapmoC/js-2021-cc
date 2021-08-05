// AJAX - Asychronus JS and XML
// Used to Send and Recieve Data Asychronously
// Asych - Does not interfere with other things going on within the page.

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create XHR object.
  const xhr = new XMLHttpRequest();
  // console.log(xhr.readyState);

  // OPEN
  xhr.open('GET', 'data.txt', true)
  // console.log('READYSTATE: ', xhr.readyState);

  // OLDER VERSION
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE: ', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // NEWER, QUICKER VERSION
  xhr.onload = function () {
    console.log('READYSTATE: ', xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      document.getElementById('output').innerHTML = `
      <h1>${this.responseText}</h1>
      `
    }
  }
  xhr.send();
}


// Ready State Values:
// 0: Request init
// 1: Server connection established
// 2: Request recieved
// 3: Processing request
// 4: Request finished & response ready.

// HTTP Statuses:
// 200 "OK"
// 404 "Not Found"
// 403 "Forbidden" (Access )