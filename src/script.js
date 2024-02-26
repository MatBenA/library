//Books storage
const myLibrary = [];

myLibrary.push(new Books("1984", "George Orwell", 328, false));

function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//TODO loops through the array and displays each book on the page
function displayLibrary() {}

//TODO function that renders a single book
function displayBook() {}

/*  
    TODO Add a “NEW BOOK” button that brings up a form allowing 
    users to input the details for the new book: author, title, 
    number of pages, whether it’s been read 
*/

const library = document.querySelector(".library");
const card = document.createElement("div");
library.appendChild(card);
card.setAttribute("class", "book-card");

displayElement(card, "h3", "1984");
displayElement(card, "div", "George Orwell");
displayElement(card, "div", 328);
displayElement(card, "button", "Completed", "completed");
displayElement(card, "button", "Remove", "remove");

function displayElement(parent, tagName, innerText, className) {
    const element = document.createElement(`${tagName}`);
    parent.appendChild(element);
    className && element.setAttribute("class", `${className}`);
    innerText && (element.innerText = `${innerText}`);
}
