"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Author = void 0;
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Author[name=${this.name}, email=${this.email}]`;
    }
}
exports.Author = Author;
class Book {
    constructor(name, authors, price, qty) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty !== null && qty !== void 0 ? qty : 0;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        return `Book[name=${this.name}, authors={${this.authors}}, price=${this.price}, qty=${this.qty}]`;
    }
    getAuthorNames() {
        let authorNames = this.authors.map(name => name.getName());
        return authorNames.join(", ");
    }
}
exports.Book = Book;
// const authors = [
//   new Author("Jey", "Jey@gmail.com"),
//   new Author("Jey2", "Jey2@gmail.com"),
// ];
// const book = new Book("test Book", authors, 39.99);
// console.log(book.getAuthorNames());
