// Book Constructor
//Book accepts title, author and isbn.
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}

// UI Constructor
class UI {
  constructor() {

  }
}

UI.prototype.addBookToList = function (book) {
  const bookList = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete">X</a></td>
  `;
  bookList.appendChild(row);
  console.log(`Adding ${book.title} to book list`);
}

UI.prototype.clearInput = function () {
  document.getElementById('title').value = '',
    document.getElementById('author').value = '',
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (message, className) {
  //Create a div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container')
}

document.getElementById('book-form').addEventListener('submit', (e) => {
  // Get form values
  let title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn)
  const ui = new UI()
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('...You left something empty, go back to check those input fields.', 'error');
  } else {
    ui.addBookToList(book);
    ui.clearInput();
  }
  e.preventDefault();
})