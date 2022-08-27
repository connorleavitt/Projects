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

    createNewBookCard(newBook) {
        const bookCards = document.querySelector('.bookCards')
        let newBookCard = document.createElement('div')
        bookCards.appendChild(newBookCard)
        newBookCard.classList.add("bookCard")

        for (let i = 0; i <= this.books.length; i++) {
            newBookCard.dataset.bookIndex = `${i-1}`
        }
        
        let newBookTitle = document.createElement('p')
        let newBookAuthor = document.createElement('p')
        let newBookPage = document.createElement('p')
        
        newBookTitle.innerText = `Title: ${newBook.title}`
        newBookCard.append(newBookTitle)
        
        newBookAuthor.innerText = `Author: ${newBook.author}`
        newBookCard.append(newBookAuthor)
        
        newBookPage.innerText = `Pages: ${newBook.pages}`
        newBookCard.append(newBookPage)

        const removeBtn = document.createElement('button')
        removeBtn.innerText = "Remove Book"
        removeBtn.classList.add("removeBtn")
        newBookCard.append(removeBtn)
    }
    
    removeBookFromLibrary(newBook) {
        this.books.pop(newBook)
        this.newBook.remove()
    }
}

// const removeBtnAction = document.querySelector('.removeBtn')
// removeBtnAction.addEventListener('click', () => {
//     newLibrary.removeBookFromLibrary()
// })


const newLibrary = new Library();
// const newBook1 = new Book("Dummy Book 1", "Dummy Author 1", "Dummy Pages 101", "true")
const form = document.querySelector('form')

function getNewBook() {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevents form from autosubmitting
        
        const newTitle = document.querySelector("#title").value
        const newAuthor = document.querySelector("#author").value
        const newPage = document.querySelector("#page").value

        const newBook = new Book(newTitle, newAuthor, newPage, "true")
        
        newLibrary.addBookToLibrary(newBook)
        newLibrary.createNewBookCard(newBook)
        form.reset()
        return
    })
}

window.onload = () => {
    form.reset()
    getNewBook()
  }
