//TODO Clear data from modal after canceling or submitting a new card
//Books storage
let myLibrary = [];

myLibrary.push(new Book("1984", "George Orwell", 328, false));
myLibrary.push(new Book("El Imperio Final", "Brandon Sanderson", 688, false));
myLibrary.push(
    new Book("El Gato en Ojotas", "Verónica Álvarez Rivera", 24, false)
);

displayLibrary(myLibrary);

//TODO refactor functions to methods
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

/* 
primer render
	->Asignar a cada botón evento de cambio de estado

Botón Click
	->Disparar cambio de estado, cambiar class e innerText

re render
	->Reasignar eventos de cambio de estado manteniendo el estado anterior
*/

//modificar objeto Book.isRead = true/false
Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
};

//loops through the array and displays each book on the page
function displayLibrary(myLibrary) {
    myLibrary.forEach((book, i) => {
        displayBook(book, i); //book.display(); refactor
    });
}

//function that renders a single book
function displayBook(book, index) {
    let toggleBtn;
    const { title, author, pages, isRead } = book;
    const library = document.querySelector(".library");
    const card = displayElement(library, "div", "", "book-card");
    displayElement(card, "h3", title);
    displayElement(card, "div", `Author: ${author}`);
    displayElement(card, "div", `Pages: ${pages}`);

    if (isRead) {
        toggleBtn = displayElement(card, "button", "Completed", "green-btn");
    } else {
        toggleBtn = displayElement(card, "button", "On Read", "orange-btn");
    }

    displayElement(card, "button", "Remove", "red-btn remove", index);
    setToggleBtn(toggleBtn, book);
}

//creates an html element given its parent, tag, text and class, return created element
//TODO Maintain state of On Read and Completed Buttons between
//renders, innerText and className will be different
function displayElement(parent, tagName, innerText, className, index) {
    const element = document.createElement(`${tagName}`);
    parent.appendChild(element);
    className && element.setAttribute("class", `${className}`);
    innerText && (element.innerText = `${innerText}`);

    //if the element is a remove button
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

    if (document.querySelector("form").reportValidity()) {
        const { title, author, pages, isread } = document.forms["add-book"];
        addBookToLibrary(
            new Book(title.value, author.value, pages.value, isread.checked)
        );

        reRenderLibrary();
        dialog.close();
        document.querySelector("form").reset();
    }
});

//Cancel Modal
document
    .querySelector("button[value='cancel']")
    .addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close();
        document.querySelector("form").reset();
    });

//add book
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

//add toggle event to button - on read / completed
function setToggleBtn(button, book) {
    button.addEventListener("click", () => {
        book.toggleRead();
        if (book.isRead) {
            button.setAttribute("class", "green-btn");
            button.innerText = "Completed";
        } else {
            button.setAttribute("class", "orange-btn");
            button.innerText = "On Read";
        }
    });
}
