class Book {
    constructor(title, author, pages, isRead = false) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead;
    }
}


class Library {
    constructor() {
        this.books = []
    }
    
    addBookToLibrary(newBook) {
        return this.books.push(newBook)
    }

    removeBookFromLibrary(newBook) {
        return this.books.pop(newBook)
    }
}

const newLibrary = new Library();
console.table(newLibrary.books);

const newBook1 = new Book("Book 1", "Author 1", "101", "true")
const newBook2 = new Book("Book 2", "Author 2", "102", "false")
const newBook3 = new Book("Book 3", "Author 3", "103")

newLibrary.addBookToLibrary(newBook1);
newLibrary.addBookToLibrary(newBook2);
newLibrary.addBookToLibrary(newBook3);

console.log(newLibrary.books);


const form = document.querySelector('form')

function getNewBook() {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevents form from autosubmitting
        
        const newTitle = document.querySelector("#title").value
        const newAuthor = document.querySelector("#author").value
        const newPage = document.querySelector("#page").value

        const newBook = new Book(newTitle, newAuthor, newPage, "true")
        
        newLibrary.addBookToLibrary(newBook);
        form.reset()
        displayBookInfo()
        console.table(newLibrary.books);
        return
    })
}

getNewBook();




function displayBookInfo() {
    const displayTitle = document.querySelector(".titles")
    const displayAuthor = document.querySelector(".authors")
    const displayPages = document.querySelector(".pages")

    displayTitle.innerHTML = '';
    displayAuthor.innerHTML = '';
    displayPages.innerHTML = '';
    
    newLibrary.books.forEach(book => {
        for (let key in book) {
            console.log(book[key]);
            if(key === "title") {
                displayTitle.innerHTML += `${book[key]}, `
            } else if(key === "author") {
                displayAuthor.innerHTML += `${book[key]}, `
            } else if (key === "pages") {
                displayPages.innerHTML += `${book[key]}, `
            } else {
                return
            }
        }
        
    })
}

window.onload = () => {
    form.reset()
    displayBookInfo()
  }
