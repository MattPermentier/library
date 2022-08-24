let addBook = document.getElementById('addBook');
let formContainer = document.getElementById('formContainer');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let checkbox = document.getElementById('checkbox');
let overlay = document.getElementById('overlay');
let body = document.getElementById('body');
let submitBtn = document.getElementById('submitBtn');
let allBooks = document.getElementById('allBooks');

let readButton;

// event listeners
submitBtn.addEventListener('click', addBookToLibrary);
addBook.addEventListener('click', openForm);
body.addEventListener('click', closeForm);

let myLibrary = [];

// constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// add a new book to the library
function addBookToLibrary(e) {
  e.preventDefault();
  let book = new Book(title.value, author.value, pages.value, isChecked());
  myLibrary.push(book);
  cleanInput();

  allBooks.innerHTML = '';
  showBooks();
}
let removeButton;

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let libraryContainer = document.createElement('div');
    libraryContainer.classList.add('libraryContainer');
    // title of book
    let bookTitle = document.createElement('p');
    bookTitle.classList.add('bookInfo');
    bookTitle.innerHTML = `"${myLibrary[i].title}"`;
    libraryContainer.appendChild(bookTitle);
    // author of book
    let bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bookInfo');
    bookAuthor.innerHTML = myLibrary[i].author;
    libraryContainer.appendChild(bookAuthor);
    // amount of pages
    let bookPages = document.createElement('p');
    bookPages.classList.add('bookInfo');
    bookPages.innerHTML = `${myLibrary[i].pages} pages`;
    libraryContainer.appendChild(bookPages);
    // read button
    readButton = document.createElement('button');
    readButton.classList.add('bookInfo');
    readButton.classList.add('readBtn');
    libraryContainer.appendChild(readButton);
    readStatus(i);
    // remove button
    removeButton = document.createElement('button');
    removeButton.classList.add('bookInfo');
    removeButton.classList.add('removeBtn');
    removeButton.id = i;
    removeButton.innerHTML = 'Remove';
    libraryContainer.appendChild(removeButton);
    // add all the info to the html div
    allBooks.appendChild(libraryContainer);
  }
}

// check if checkbox is checked
function isChecked() {
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

function readStatus(num) {
  if (myLibrary[num].read === true) {
    readButton.classList.remove('notRead');
    readButton.classList.add('read');
    readButton.innerHTML = 'Read';
  } else if (myLibrary[num].read === false) {
    readButton.classList.remove('read');
    readButton.classList.add('notRead');
    readButton.innerHTML = 'Not read';
  }
}

// when click on readBtn => change status
function changeReadStatus() {
  document.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('readBtn')) {
      if (target.classList.contains('notRead')) {
        target.classList.remove('notRead');
        target.classList.add('read');
        target.innerHTML = 'Read';
      } else {
        target.classList.remove('read');
        target.classList.add('notRead');
        target.innerHTML = 'Not read';
      }
    }
  });
}
changeReadStatus();

function deleteBook() {
  document.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('removeBtn')) {
      let itemToRemove = target.id;
      myLibrary.splice(itemToRemove, 1);
      let newLibrary = myLibrary;
      allBooks.innerHTML = '';
      showBooks();
    }
    return;
  });
}
deleteBook();

// clean the input fields before adding a new book
function cleanInput() {
  title.value = '';
  author.value = '';
  pages.value = '';
  checkbox.checked = false;
}

// open the add book form on button click
function openForm() {
  formContainer.classList.add('active');
  overlay.classList.add('active');
}

// close the add book form when clicked outside the form
function closeForm(e) {
  let target = e.target;

  if (target.classList.contains('overlay')) {
    formContainer.classList.remove('active');
    overlay.classList.remove('active');
  }
}
