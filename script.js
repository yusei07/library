let myLibrary = [];

const $name = document.querySelector("#name");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#table-body");
const $form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  render();
  // feather icon
  feather.replace();
  clearForm();
})

const $table = document.querySelector("table");

class Book {
  constructor(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  }

}

// Book.prototype.showInfo = function() {
//   console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
// }

function addBookToLibrary() {
  // ensure value is not empty 
  if ($name.value.length === 0 || $author.value.length === 0) {
    alert("Please, fill all the fields"); // make a custom div that alerts the following message
    return;
  }

  // store new obj to arr
  const newBook = new Book($name.value, $author.value, $status.value);
  myLibrary.push(newBook);
  console.log(myLibrary)
}

function render() {
  $tableBody.innerHTML = "";
  myLibrary.forEach((book) => {
    const htmlBook = `
      <tr class="text-left border-b border-[#d1d1d1] relative">
        <td class="py-4">${book.title}</td>
        <td class="py-4">${book.author}</td>
        <td class="py-4"><button class="border border-[#d1d1d1] rounded-md px-6 py-2">${book.status}</button></td>
        <! -- remove btn -->
        <td class="static md:absolute top-5 right-5">
          <button class="px-8 py-2" onclick="removeBook(${book})">
            <span class="flex flex-row items-center">
              <i data-feather="trash-2" class="w-5 h-5 text-[#bebebe] hover:text-[#232323] dark:hover:text-[#eee] transition duration-300"></i>
            </span>
          </button>
        </td>
      </tr>
      `;
    $tableBody.insertAdjacentHTML("afterBegin", htmlBook);
  });
}

function clearForm() {
  $name.value = "";
  $author.value = "";
}

// function updateStatus() {
//
// }

function removeBook(index) {
  myLibrary.splice(index, 1);
}


// dark/light mode  toggle
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', () => {
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
})

