let myLibrary = [
  {title: "The Meditations", author: "Marcus Aurelius", status: "Read"},
  {title: "Ego Is the Enemy", author: "Ryan Holiday", status: "Not read"},
  {title: "The Alchemist", author: "Paulo Coelho", status: "Read"}
];

class Book {
  constructor(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
  }
}

const $title = document.querySelector("#name");
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

const $table = document.querySelector("table").addEventListener("click", (e) => {
  const currentTarget = e.target.closest("tr").childNodes[1];

  // remove btn
  if (e.target.classList.contains("del-btn")) {
    removeBook(findBook(myLibrary, currentTarget.innerText));
  }

  // status btn
  if (e.target.classList.contains("status-btn")) {
    changeStatus(findBook(myLibrary, currentTarget.innerText));
  }

  render();
  feather.replace()
})

function addBookToLibrary() {
  // ensure value is not empty 
  if ($title.value.length === 0 || $author.value.length === 0) {
    alert("Please, fill all the fields"); // make a custom div that alerts the following message
    return;
  }

  // store new obj to arr
  const newBook = new Book($title.value, $author.value, $status.value);
  myLibrary.push(newBook);
  console.log(myLibrary)
}

function clearForm() {
  $title.value = "";
  $author.value = "";
}

function findBook(libraryArray, title) {
  if (libraryArray.length === 0 || libraryArray === null) {
    return;
  }

  for (book of libraryArray)
    if (book.title === title) {
      return libraryArray.indexOf(book);
    }
}

function removeBook(currentBook) {
  myLibrary.splice(currentBook, 1);
}

function changeStatus(book) {
  myLibrary[book].status === "Read"
  ? myLibrary[book].status = "Not read"
  : myLibrary[book].status = "Read";
}

function render() {
  $tableBody.innerHTML = "";
  myLibrary.forEach((book) => {
    const htmlBook = `
      <tr class="text-left border-b border-[#d1d1d1] relative">
        <td class="py-4">${book.title}</td>
        <td class="py-4">${book.author}</td>
        <! -- toggle read -->
        <td class="py-4"><button class="status-btn border border-[#d1d1d1] rounded-md px-6 py-2">${book.status}</button></td>
        <! -- remove btn -->
        <td class="static md:absolute top-5 right-5">
          <button class="del-btn flex flex-row justify-center items-center gap-2 pl-5 pr-6 py-2 text-[#bebebe] hover:text-[#eee] dark:hover:text-[#232323] bg-[#232323] dark:bg-white rounded-md">
            <i data-feather="trash-2" class="w-5 h-5  transition duration-300"></i>
            <span class="">Delete</span>
          </button>
        </td>
      </tr>
      `;
    $tableBody.insertAdjacentHTML("beforeEnd", htmlBook);
  });
}



render();
feather.replace();

// dark/light mode  toggle
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', () => {
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
})

