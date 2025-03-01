console.log("=".repeat(40))
console.log("Task 1");     //Just a decorative touch
console.log("=".repeat(40))
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
console.log("=".repeat(40))
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
