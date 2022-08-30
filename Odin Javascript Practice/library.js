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

        let newBookTitleDiv = document.createElement('div')
        let newBookAuthorDiv = document.createElement('div')
        let newBookPageDiv = document.createElement('div')
        let newBookIsReadDiv = document.createElement('div')
        let newBookButtonsDiv = document.createElement('div')

        let newBookTitleHeader = document.createElement('h3')
        let newBookAuthorHeader = document.createElement('h3')
        let newBookPageHeader = document.createElement('h3')
        let newBookIsReadHeader = document.createElement('h3')

        let newBookTitleContent = document.createElement('p')
        let newBookAuthorContent = document.createElement('p')
        let newBookPageContent = document.createElement('p')
        let newBookIsReadContent = document.createElement('INPUT')
            newBookIsReadContent.setAttribute("type", "checkbox")
        
        newBookTitleDiv.classList.add("newBookTitleDiv")
        newBookTitleHeader.classList.add("newBookTitleHeader")
        newBookTitleHeader.innerText = `Title:`
        newBookTitleContent.classList.add("newBookTitleContent")
        newBookTitleContent.innerText = `${newBook.title}`
        newBookTitleDiv.append(newBookTitleHeader)
        newBookTitleDiv.append(newBookTitleContent)
        newBookCard.append(newBookTitleDiv)
        
        newBookAuthorDiv.classList.add("newBookAuthorDiv")
        newBookAuthorHeader.classList.add("newBookAuthorHeader")
        newBookAuthorHeader.innerText = `Author:`
        newBookAuthorContent.classList.add("newBookAuthorContent")
        newBookAuthorContent.innerText = `${newBook.author}`
        newBookAuthorDiv.append(newBookAuthorHeader)
        newBookAuthorDiv.append(newBookAuthorContent)
        newBookCard.append(newBookAuthorDiv)

        newBookPageDiv.classList.add("newBookPageDiv")
        newBookPageHeader.classList.add("newBookPageHeader")
        newBookPageHeader.innerText = `Pages:`
        newBookPageContent.classList.add("newBookPageContent")
        newBookPageContent.innerText = `${newBook.pages}`
        newBookPageDiv.append(newBookPageHeader)
        newBookPageDiv.append(newBookPageContent)
        newBookCard.append(newBookPageDiv)

        newBookIsReadDiv.classList.add("newBookIsReadDiv")
        newBookIsReadHeader.classList.add("newBookIsReadHeader")
        newBookIsReadHeader.innerText = `Read?`
        newBookIsReadContent.classList.add("newBookIsReadContent")
        if (newBook.isRead === true) {
            newBookIsReadContent.checked = true
        } else {
            newBookIsReadContent.checked = false
        }
        newBookIsReadContent.disabled = true
        newBookIsReadDiv.append(newBookIsReadHeader)
        newBookIsReadDiv.append(newBookIsReadContent)
        newBookCard.append(newBookIsReadDiv)

        newBookButtonsDiv.classList.add("newBookButtonsDiv")

        const editBtn = document.createElement('button')
        editBtn.innerHTML = 'EDIT'
        editBtn.classList.add("editBtn")
        newBookButtonsDiv.append(editBtn)

        const removeBtn = document.createElement('button')
        removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        removeBtn.classList.add("removeBtn")
        newBookButtonsDiv.append(removeBtn)
        newBookCard.append(newBookButtonsDiv)

        //check if current library is empty
        checkCurrentLibrary()
        console.log(this.books);
    }
    
    removeBookFromLibrary(book) {
        console.log('remove button pressed');
        console.log(book);
        this.books.splice(book, 1);
        console.log(this.books);
        let bookDataIndex = document.querySelectorAll("[data-book-index]")
        for (let i = 0; i < bookDataIndex.length; i++) {
            if (book === bookDataIndex[i].dataset.bookIndex) {
                bookDataIndex[i].remove()
            }
        }
        //dynamically update data att to reflect current index
        for (let i = book; i <= this.books.length; i++) {
            bookDataIndex[i].dataset.bookIndex = `${i-1}`
        }
        
        checkCurrentLibrary()
    }

    editLibrary(book) {
        console.log('edit/confirm button pressed');
        console.log(book);
        // find which book === index of array, then update class newBookIsReadContent.disable to false
        let bookDataIndex = document.querySelectorAll("[data-book-index]")
        
        
        let checkOpenConfirm = document.querySelectorAll('.confirmBtn')
            if (checkOpenConfirm.length === 0) {
                
                // update "edit" button to "confirm?"
                const toggleEditButton = bookDataIndex[book].querySelector(".editBtn")
                toggleEditButton.style.display = 'none'
                
                const confirmBtn = document.createElement('button')
                confirmBtn.innerHTML = 'Confirm?'
                confirmBtn.classList.add("confirmBtn")
                const newBookButtonsDiv = bookDataIndex[book].querySelector(".newBookButtonsDiv")
                const removeBtn = bookDataIndex[book].querySelector(".removeBtn")
                newBookButtonsDiv.insertBefore(confirmBtn, removeBtn)


                // if user clicks on title text content, allow edit
                const titleTextArea = bookDataIndex[book].querySelector(".newBookTitleDiv")    
                titleTextArea.addEventListener('click', () => {
                    const titleTextContent = titleTextArea.querySelector(".newBookTitleContent") 
                    const input = document.createElement('input')
                    input.type = 'text',
                    input.classList.add("editInput")
                    input.value = titleTextContent.textContent
                    titleTextArea.insertBefore(input, titleTextContent)
                    titleTextContent.style.display = 'none'
                }, {once : true});
                
                // enable checkbox button in card
                const newBookIsReadContent = bookDataIndex[book].querySelector('.newBookIsReadContent')
                newBookIsReadContent.disabled = false;
                
                // update array object key value switch of true || false
                // add event listener for confirm button
                // switch button text back to edit
                let editConfirmButton = bookDataIndex[book].querySelector('.confirmBtn')
                editConfirmButton.addEventListener('click', () => {


                    titleTextContent.style.display = '' //toggle title content back
                    titleAuthorContent.style.display = '' //toggle author content back
                    titlePageContent.style.display = '' //toggle page content back

                    toggleEditButton.style.display = '' //toggle edit button back
                    editConfirmButton.remove() //delete confirm button

                }, {once : true});
        } else {
            alert("You can only edit one at a time!")
        }
    }
}


const newLibrary = new Library();
const form = document.querySelector('form')

document.addEventListener('click', listener)

function listener(e) {
    let element = e.target.className
    if (element === "removeBtn") {
        let parentIndex = e.target.parentElement.parentElement.getAttribute('data-book-index')
        newLibrary.removeBookFromLibrary(parentIndex)
    } else if (element === "editBtn") {
        console.log('edit button pressed');
        let parentIndex = e.target.parentElement.parentElement.getAttribute('data-book-index')
        newLibrary.editLibrary(parentIndex)
    } else return
}

function getNewBook() {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevents form from autosubmitting
        
        const newTitle = document.querySelector("#title").value
        const newAuthor = document.querySelector("#author").value
        const newPage = document.querySelector("#page").value
        const newIsRead = document.querySelector("#isRead").checked

        const newBook = new Book(newTitle, newAuthor, newPage, newIsRead)
        
        newLibrary.addBookToLibrary(newBook)
        newLibrary.createNewBookCard(newBook)
        form.reset()
        return
    })
}

function checkCurrentLibrary() {
    const currentLibrary = document.querySelector('.section__current-library')
    if (newLibrary.books.length === 0) {
        const emptyLibMsg = document.createElement('p')
        emptyLibMsg.innerText = 'There are no current books in your library! Add some books above.'
        emptyLibMsg.classList.add('section__current-library-content-when-empty')
        currentLibrary.append(emptyLibMsg)
    } else if (newLibrary.books.length > 0) {
        const emptyLibMsgCheck = document.querySelector('.section__current-library-content-when-empty')
        if (emptyLibMsgCheck === null) {
            return;
        } else {
            emptyLibMsgCheck.remove() 
        }
    } else {
        return
    }
}

window.onload = () => {
    form.reset()
    getNewBook()
    checkCurrentLibrary()
  }
