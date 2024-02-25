const myLibrary = [];

myLibrary.push(new Books("1984", "George Orwell", 328, false));

console.log(myLibrary);

displayLibrary();

function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    /*     this.info = () => {
        return `${this.title} by ${author}, ${this.pages} pages, ${
            isRead ? "already read" : "not read yet"
        } `;
    }; */
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const myBook = myLibrary[0];
    const library = document.querySelector("section");
    const bookCard = document.createElement("div")
    library.appendChild(bookCard);
    bookCard.setAttribute("class", "book-card");
}

//const Book1 = new Books("1984", "George Orwell", 328, false);

// console.log(book1.info());
/* console.log(Books.prototype);
console.log(Object.getPrototypeOf(Book1));
console.log(Object.getPrototypeOf(Book1) === Books.prototype); */

//Object.prototype.valueOf();
