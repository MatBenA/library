//Books storage
const myLibrary = [];

myLibrary.push(new Books("1984", "George Orwell", 328, false));
myLibrary.push(new Books("El Imperio Final", "Brandon Sanderson", 688, false));
myLibrary.push(
    new Books("El Gato en Ojotas", "Verónica Álvarez Rivera", 24, false)
);

displayLibrary(myLibrary);

function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//loops through the array and displays each book on the page
function displayLibrary(myLibrary) {
    myLibrary.forEach((book) => {
        displayBook(book);
    });
}

//function that renders a single book
function displayBook({ title, author, pages, isRead }) {
    const library = document.querySelector(".library");
    const card = displayElement(library, "div", "", "book-card");
    displayElement(card, "h3", title);
    displayElement(card, "div", `Author: ${author}`);
    displayElement(card, "div", `Pages: ${pages}`);
    displayElement(card, "button", "Completed", "green-btn");
    displayElement(card, "button", "Remove", "red-btn");
}

//creates an html element given its parent, tag, text and class, return created element
function displayElement(parent, tagName, innerText, className) {
    const element = document.createElement(`${tagName}`);
    parent.appendChild(element);
    className && element.setAttribute("class", `${className}`);
    innerText && (element.innerText = `${innerText}`);
    return element;
}

/*  
    TODO Add a “NEW BOOK” button that brings up a form allowing 
    users to input the details for the new book: author, title, 
    number of pages, whether it’s been read 
*/

const showBtn = document.querySelector(".add-icon");
const dialog = document.getElementById("dialog");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});
