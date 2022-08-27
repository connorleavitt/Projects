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
// console.table(newLibrary.books);

const newBook1 = new Book("Book 1", "Author 1", "101", "true")
const newBook2 = new Book("Book 2", "Author 2", "102", "false")
const newBook3 = new Book("Book 3", "Author 3", "103")

newLibrary.addBookToLibrary(newBook1);
newLibrary.addBookToLibrary(newBook2);
newLibrary.addBookToLibrary(newBook3);

// console.log(newLibrary.books);


const form = document.querySelector('form')

function getNewBook() {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevents form from autosubmitting
        
        const newTitle = document.querySelector("#title").value
        const newAuthor = document.querySelector("#author").value
        const newPage = document.querySelector("#page").value

        const newBook = new Book(newTitle, newAuthor, newPage, "true")
        
        newLibrary.addBookToLibrary(newBook);
        createNewBookCard()
        form.reset()
        return
    })
}

getNewBook();



const bookCards = document.querySelector('.bookCards')


function createNewBookCard() {
    // const displayTitle = document.querySelector("[data-title]")
    // const displayAuthor = document.querySelector("[data-author]")
    // const displayPages = document.querySelector("[data-page]")



    newLibrary.books.forEach(book => {
        console.log('book object');
        
        let newBookCard = document.createElement('div')
        bookCards.appendChild(newBookCard)
        let newBookTitle = document.createElement('p')
        let newBookAuthor = document.createElement('p')
        let newBookPage = document.createElement('p')
        
        for (let key in book) {
            if(key === "title") {
                newBookTitle = `Title: ${book[key]}`
                newBookCard.append(newBookTitle)
                console.log('title');
            } else if(key === "author") {
                newBookAuthor = `Author: ${book[key]}`
                newBookCard.append(newBookAuthor)
                console.log('author');
            } else if (key === "pages") {
                newBookPage = `Pages: ${book[key]}`
                newBookCard.append(newBookPage)
                console.log('page');
            } else {
                return
            }
        }
        
        // bookCards.appendChild(newBookCard)


    })

}

// displayCurrentBooks()


window.onload = () => {
    form.reset()
    // displayCurrentBooks()
  }
