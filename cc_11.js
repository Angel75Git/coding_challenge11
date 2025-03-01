console.log("=".repeat(40))
console.log("Task 1");     //Just a decorative touch

//Task 1

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title,
        this.author = author, //Assigning each constructor with variables
        this.isbn = isbn,
        this.copies = copies
    }
    getDetails(){
        return `Book Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }//Return general information about book
    updateCopies(quantity){
        return this.copies += quantity;
    }// Copies are added so that you can add or subtract using a minus sign
}
//Test Cases:
//Record Great Gatsby
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

//Check out a copy of Great Gatsby
book1.updateCopies(-1);
console.log(book1.getDetails());

console.log("=".repeat(40))
console.log("Task 2");     //Just a decorative touch

//Task 2

class Borrower {
    constructor(name, borrowerId, borrowedBooks = []) {
        this.name = name,
        this.borrowerId = borrowerId,
        this.borrowedBooks = borrowedBooks //Empty array to begin
    }
    borrowBook(book){
        return this.borrowedBooks.push(book);
    } //Pushing book to array
    returnBook(book){
        return this.borrowedBooks.splice(book);
    }//Deleting a book from array
}

//Test Cases:
//Borrowed Great Gatsby
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

//Returned Great Gatsby
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

console.log("=".repeat(40))
console.log("Task 3");     //Just a decorative touch
//Task 3

class Library {
    constructor(books = [], borrowers = []) {
        this.books = books,
        this.borrowers = borrowers
    }
    addBook(book1){
        return this.books.push(book1);
    } //Separating arrays to 
    listsBooks(){
        this.books.forEach(book => console.log(book.getDetails()))
    } //Using arrow function to iterate through books
    lendBook(borrowerId, isbn){
//Attempting to locate isnb and borrowerid
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        book1.updateCopies(-1);
        borrower1.borrowBook("The Great Gatsby"); // Adding book title to borrower's list
    }
}

//Cases: 
const library = new Library();
library.addBook(book1);
library.listsBooks();
// Adding book + displaying it


console.log("=".repeat(40))
console.log("Task 4");     //Just a decorative touch

library.lendBook(201, 123456) //ISBN 123456 Book
console.log(book1.getDetails());
 

//Case Test
console.log(borrower1.borrowedBooks);