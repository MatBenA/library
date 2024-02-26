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

displayElement(".book-card", "h3", "1984");
/* const title = document.createElement("h3");
title.innerText = "1984";
card.appendChild(title); */

displayElement(".book-card", "div", "George Orwell");
/* const author = document.createElement("div");
author.innerText = "George Orwell";
card.appendChild(author); */

displayElement(".book-card", "div", 328);
/* const pages = document.createElement("div");
pages.innerText = 328;
card.appendChild(pages); */

displayElement(".book-card", "button", "Completed", "completed");
/* const isread = document.createElement("button");
isread.innerText = "Completed";
card.appendChild(isread);
isread.setAttribute("class", "completed"); */

displayElement(".book-card", "button", "Remove", "remove")
/* const remove = document.createElement("button");
card.appendChild(remove);
remove.setAttribute("class", "remove");
remove.innerText = "Remove"; */

function displayElement(parentSelector, tagName, innerText, className) {
    const parent = document.querySelector(`${parentSelector}`);
    const element = document.createElement(`${tagName}`);
    parent.appendChild(element);
    className && element.setAttribute("class", `${className}`);
    innerText && (element.innerText = `${innerText}`);
}
