let submitBtn = document.getElementById('submitBtn');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let checkbox = document.getElementById('checkbox');

submitBtn.addEventListener('click', addBookToLibrary);

let myLibrary = [];

// constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  let book = new Book(title.value, author.value, pages.value, isChecked());
  myLibrary.push(book);
  console.log(myLibrary);
  cleanInput();
}

function isChecked() {
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

function cleanInput() {
  title.value = '';
  author.value = '';
  pages.value = '';
  checkbox.checked = false;
}
