function Books(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = () => {
        return `${this.title} by ${author}, ${this.pages} pages, ${
            isRead ? "already read" : "not read yet"
        } `;
    };
}

const Book1 = new Books("1984", "George Orwell", 328, false);

// console.log(book1.info());
/* console.log(Books.prototype);
console.log(Object.getPrototypeOf(Book1));
console.log(Object.getPrototypeOf(Book1) === Books.prototype); */

//Object.prototype.valueOf();