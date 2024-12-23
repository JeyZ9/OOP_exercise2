"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ex3_1 = require("./Ex3");
const { Author, Book } = require("./Ex1");
console.log("##################EX1#####################");
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
console.log("#################EX2######################");
const { Customer, Invoice } = require("./Ex2");
const customer = new Customer(1, "Wisarut", 10);
const invoice = new Invoice(1, customer, 500);
console.log(invoice.toString());
console.log("################EX3######################");
const { Person } = require("./Ex3");
const person = new Person("Wisarut", "Nakhon Pathom");
const student = new Ex3_1.Student(person.getName(), person.getAddress(), "Software Engineer", 20, 11400);
const staff = new Ex3_1.Staff(person.getName(), person.getAddress(), "NPRU", 25000);
console.log(student.toString());
console.log(staff.toString());
console.log("#######################################");
