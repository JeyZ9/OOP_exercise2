const { Author, Book } = require("./Ex1");

console.log("#######################################")
const authors = [
  new Author("Jey", "Jey@gmail.com"),
  new Author("Jey2", "Jey2@gmail.com"),
];

// const test = new Author("test", "test@gmail.com");

const book = new Book("test Book", authors, 39.99);
book.setQty(21);
// console.log(book.getAuthorNames());
// test.setEmail("Hello@gmal.com");
console.log(book.toString());
console.log("#######################################")

const { Customer, Invoice } = require("./Ex2");

const customer = new Customer(1, "Wisarut", 10);

const invoice = new Invoice(1, customer, 500);
console.log(invoice.toString());