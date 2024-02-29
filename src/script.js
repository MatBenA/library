//TODO add functionality to the remove card button
//Books storage
let myLibrary = [];

myLibrary.push(new Books("1984", "George Orwell", 328, false));
myLibrary.push(new Books("El Imperio Final", "Brandon Sanderson", 688, false));
myLibrary.push(
    new Books("El Gato en Ojotas", "Verónica Álvarez Rivera", 24, false)
);

displayLibrary(myLibrary);

//TODO refactor functions to methods
function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//TODO make card button toggle between Completed and On Read States
Books.prototype.toggleRead = () => {};

//loops through the array and displays each book on the page
function displayLibrary(myLibrary) {
    myLibrary.forEach((book, i) => {
        displayBook(book, i); //book.display(); refactor
    });
}

//function that renders a single book
function displayBook({ title, author, pages, isRead }, index) {
    const library = document.querySelector(".library");
    const card = displayElement(library, "div", "", "book-card");
    displayElement(card, "h3", title);
    displayElement(card, "div", `Author: ${author}`);
    displayElement(card, "div", `Pages: ${pages}`);
    displayElement(card, "button", "Completed", "green-btn");
    displayElement(card, "button", "Remove", "red-btn remove", index);
}

//creates an html element given its parent, tag, text and class, return created element
function displayElement(parent, tagName, innerText, className, index) {
    const element = document.createElement(`${tagName}`);
    parent.appendChild(element);
    className && element.setAttribute("class", `${className}`);
    innerText && (element.innerText = `${innerText}`);

    
    if (innerText === "Remove") {
        setRemoveBtn(element, index);
    }
    return element;
}

//Modal Management
const showBtn = document.querySelector(".add-icon");
const dialog = document.getElementById("dialog");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

//Add new Book to library
const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const { title, author, pages, isread } = document.forms["add-book"];
    addBookToLibrary(
        new Books(title.value, author.value, pages.value, isread.value)
    );

    reRenderLibrary();
    dialog.close();
});

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//Removes library DOM element, creates it again and displays updated library
function reRenderLibrary() {
    document.querySelector(".library").remove();
    const container = document.querySelector(".library-container");
    const library = document.createElement("section");
    library.setAttribute("class", "library");
    container.appendChild(library);
    displayLibrary(myLibrary);
}

//sets remove button for book cards
function setRemoveBtn(button, index) {
    button.setAttribute("data-index", index);
    //each time a card is removed from myLibrary the layout is re rendered
    button.addEventListener("click", ({ target }) => {
        myLibrary = myLibrary.filter(
            (book, index) => index !== parseInt(target.dataset.index)
        );
        reRenderLibrary();
    });
}
