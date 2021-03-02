"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var classes_1 = require("./classes");
var encyclopedia_1 = require("./encyclopedia");
//let fee = calcFee(5);
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Biology', author: 'John', available: false, category: enum_1.Category.Course },
        { id: 2, title: 'BioGraphy1', author: 'Neha', available: true, category: enum_1.Category.Biography },
        { id: 3, title: 'BioGraphy2', author: 'John', available: true, category: enum_1.Category.Biography }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numOfBooks = books.length;
    var firstAvail = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book_1 = books_1[_i];
        if (book_1.available)
            firstAvail = book_1.title;
    }
    console.log('Number of Books ' + numOfBooks);
    console.log('First Available ' + firstAvail);
}
//defining default category
function GetBooksByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enum_1.Category.Biography; }
    console.log('Category Passed: ' + categoryFilter);
    var allBooks = GetAllBooks();
    var filtered = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book_2 = allBooks_1[_i];
        if (book_2.category == categoryFilter) {
            filtered.push(book_2.title);
        }
    }
    return filtered;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var titleBook = titles_1[_i];
        console.log(titleBook);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id == id; })[0];
}
//Function Types
function CreateCustomerID(name, id) {
    return name + id;
}
var IDGenerator;
IDGenerator = CreateCustomerID;
var myID = IDGenerator('Neha', 123);
console.log(myID);
var biographyBooks = GetBooksByCategory(enum_1.Category.Biography);
biographyBooks.forEach(function (val, id, arr) { return console.log(++id + '-' + val); });
//Paranmeter Optional
function CreateCustomer(name, age, city) {
    console.log('Creating Customer' + name);
    if (age) {
        console.log('Age ' + age);
    }
    if (city) {
        console.log('City ' + city);
    }
}
CreateCustomer('John');
CreateCustomer('John', 19);
//calling without params
LogFirstAvailable();
//Variable Number of params Rest params
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    var checkoutBooks = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book_3 = GetBookById(id);
        checkoutBooks.push(book_3.title);
    }
    return checkoutBooks;
}
var myBooks = CheckoutBooks('Neha', 1, 2);
myBooks.forEach(function (title) { return console.log(title); });
function GetTitles(bookProp) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProp == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book_4 = allBooks_2[_i];
            if (book_4.author == bookProp)
                foundTitles.push(book_4.title);
        }
    }
    if (typeof bookProp == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book_5 = allBooks_3[_a];
            if (book_5.available == bookProp)
                foundTitles.push(book_5.title);
        }
    }
    return foundTitles;
}
var titles = GetTitles('John');
titles.forEach(function (title) { return console.log(title); });
var book = {
    id: 123,
    title: 'ring',
    author: 'Neha',
    available: false,
    category: enum_1.Category.Childres,
    markDamaged: function (reason) { return console.log('Damaged' + reason); }
};
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
PrintBook(book);
book.markDamaged('Missing Pages');
//class invocation
var lib = new classes_1.UniversityLib();
lib.name = 'Amit';
lib.assistCustomer('Neha');
//Class
// let ref = new ReferenceItem();
// ref.title ='My Uniqe Book';
// ref.year =1990;
// ref.printItem();
//Inheritance
var refSub = new encyclopedia_1.default();
refSub.title = ' I am Sub class';
refSub.year = 2000;
refSub.edition = 10;
refSub.printItem();
//# sourceMappingURL=app.js.map