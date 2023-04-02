
let form =document.querySelector('form');
let bookListRoot =document.querySelector('.book__list');

const nameElm =form.elements.bookTitle;
const authorElm =form.elements.bookAuthor;
const isbnElm=form.elements.bookIsbn;


class Book{
    constructor(name,author,isbn){
        this.name =name;
        this.author=author;
        this.isbn=isbn;

    }
}

class BookList{
    constructor(books = []){
        this.books = books;
    }
    addBook(name,author,isbn){
        let book = new Book(name,author,isbn);
        this.books.push(book);
    }
    createUI(){
        this.books.forEach((book) =>{
            let tr =document.createElement('tr');
            let title =document.createElement('title');
            title.innerText = book.name;
            let author =document.createElement('author');
            author.innerText=book.author;
            let isbn =document.createElement('isbn');
            isbn.innerText=book.isbn;
            tr.append(title,author,isbn);
            // tr.innerHTML = `
            //     <td>${book.name}</td>
            //     <td>${book.author}</td>
            //     <td>${book.isbn}</td>
            //     <td><a href="#" class="btn-1 btn-danger btn-sm delete">X</a></td>
            // `;
   
            bookListRoot.append(tr);
        })
       
    }
}

let library =new BookList();

function handleSubmit(event){
    event.preventDefault();
    const name = nameElm.value;
    const author = authorElm.value;
    const isbn = isbnElm.value;
    console.log(name,author,isbn);
    library.addBook(name,author,isbn);
}
form.addEventListener('submit', handleSubmit);