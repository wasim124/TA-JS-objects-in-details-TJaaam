class Book{
    constructor(title,category,author, isRead=false,finishedDate){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead =isRead;
        this.finishedDate=finishedDate;
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate=Date.now();
    }
}
class BookList{
    constructor(){
        this.books =[];
        this.currentBookIndex=0;
    }
    add(books){
        this.books.push(...books);
    }
    getCurrentBook(){
        return this.books[this.currentBookIndex];
    }
    getNextBook(){
        if (this.currentBookIndex === this.books.length -1){
            this.currentBookIndex =0;
        }else{
            this.currentBookIndex++;
        }
        return this.getCurrentBook();
    }
    getPrevBook(){
        if(this.currentBookIndex === 0){
            this.currentBookIndex = this.books.length -1;
        }else{
            this.currentBookIndex-- ;
        }
        return this.getCurrentBook();
    }
    changeCurrentBook(index){
        if ( index < 0 || index >= this.books.length){
            throw new Error('Invalid index');
        }
        this.currentBookIndex =index;
    }
}

// Create 5 book objects

const book1 = new Book("The Lord of the Rings", "Fantasy", "J.R.R. Tolkien");
const book2 = new Book("The Hitchhiker's Guide to the Galaxy", "Science Fiction", "Douglas Adams");
const book3 = new Book("To Kill a Mockingbird", "Classic", "Harper Lee");
const book4 = new Book("The Great Gatsby", "Classic", "F. Scott Fitzgerald");
const book5 = new Book('The Alchemist', 'Fiction', 'Paulo Coelho');

// Create a BookList object
const bookList = new BookList();

// Add the books to the list
bookList.add([book1, book2, book3, book4, book5]);

// Test the methods
console.log(bookList.getCurrentBook()); // The Lord of the Rings
console.log(bookList.getNextBook()); // The Hitchhiker's Guide to the Galaxy
console.log(bookList.getNextBook()); // To Kill a Mockingbird
console.log(bookList.getPrevBook()); // The Hitchhiker's Guide to the Galaxy
console.log(bookList.changeCurrentBook(3)); // change the current book index to 3
console.log(bookList.getCurrentBook()); // The Great Gatsby
bookList.getCurrentBook().markBookAsRead();
console.log(bookList.getCurrentBook()); 
