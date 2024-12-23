const { Author, Book } = require("./Ex1");

console.log("\n##################EX1#####################\n");
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

console.log("\n##################EX2#####################\n");

// const { Customer, Invoice } = require("./Ex2");

// const customer = new Customer(1, "Wisarut", 10);

// const invoice = new Invoice(1, customer, 500);
// console.log(invoice.toString());


console.log("\n##################EX3#####################\n");

const { Person, Student, Staff } = require("./Ex3");

const person = new Person("Wisarut", "Nakhon Pathom");
const student = new Student(person.getName(), person.getAddress(), "Software Engineer", 20, 11400);
const staff = new Staff(person.getName(), person.getAddress(), "NPRU", 25000);

console.log(student.toString(), "\n");
console.log(staff.toString());
console.log("\n##################EX4#####################\n");

const { Shap, Circle, Rectangle, Square } = require("./Ex4");

const shap = new Shap("Blue");
const circle = new Circle(12, shap.getColor());

const rectangle = new Rectangle(12, 36);

const square = new Square(12, shap.getColor());

console.log(circle.toString(), "\n");
console.log("Before radius:", circle.getRadius(), "\n");
circle.setRadius(24)
console.log("After radius:",circle.getRadius(), "\n");
console.log("Area:", circle.getArea().toFixed(2), "\n");
console.log("Perimeter:", circle.getPerimeter().toFixed(2), "\n");
console.log(circle.toString(), "\n");

console.log("-----------------------------------------------------------------------------------\n");


console.log(rectangle.toString(), "\n");
console.log("Before Width:", rectangle.getWidth(), "\n");
rectangle.setWidth(24)
console.log("After Width:",rectangle.getWidth(), "\n");
console.log("Before Length:", rectangle.getLength(), "\n");
rectangle.setLength(48)
console.log("After Length:",rectangle.getLength(), "\n");
console.log("Area:", rectangle.getArea(), "\n");
console.log("Perimeter:", rectangle.getPerimeter(), "\n");
console.log(rectangle.toString(), "\n");

console.log("-----------------------------------------------------------------------------------\n");

console.log(square.toString(), "\n");
console.log("Before Side:", square.getSide(), "\n");
square.setSide(24)
console.log("After Side:",square.getSide(), "\n");
console.log("Area:", square.getArea(), "\n");
console.log("Perimeter:", square.getPerimeter(), "\n");
console.log(square.toString(), "\n");


console.log("\n##################EX5#####################\n");

const { Customer, Visit, DiscountRate } = require("./Ex5");

const customer = new Customer("Wisarut")
customer.setMember(true);
customer.setMemberType("gold");

const visit = new Visit(customer.getName());
visit.setServiceExpense(200);
visit.setProductExpense(100);

const discountRate = new DiscountRate();
const serviceDiscount = discountRate.getServiceDiscountRate(customer.getMemberType()) * visit.getServiceExpense();
const productDiscount = discountRate.getProductDiscountRate(customer.getMemberType()) * visit.getProductExpense();

const totalExpenseAfterDiscount = visit.getTotalExpense() - serviceDiscount - productDiscount;

console.log(visit.toString());
console.log("Service Discount:", serviceDiscount);
console.log("Product Discount:", productDiscount);
console.log("Total Expense After Discount:", totalExpenseAfterDiscount);