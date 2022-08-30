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

                const once = {once : true};
                
                // if user clicks on title text content, allow edit
                const titleTextArea = bookDataIndex[book].querySelector(".newBookTitleDiv")    
                const titleTextContent = titleTextArea.querySelector(".newBookTitleContent") 
                
                let createTitleInput = function() {
                    const titleInput = document.createElement('input')
                    titleInput.type = 'text'
                    titleInput.classList.add("editInput")
                    titleInput.placeholder = titleTextContent.innerText
                    titleTextArea.insertBefore(titleInput, titleTextContent)
                    titleTextContent.style.display = 'none'
                    
                }
                titleTextArea.addEventListener('click', createTitleInput, once)
                

                // if user clicks on Author text content, allow edit
                const authorTextArea = bookDataIndex[book].querySelector(".newBookAuthorDiv")    
                const authorTextContent = authorTextArea.querySelector(".newBookAuthorContent") 
                
                let createAuthorInput = function() {
                    const authorInput = document.createElement('input')
                    authorInput.type = 'text'
                    authorInput.classList.add("editInput")
                    authorInput.placeholder = authorTextContent.innerText
                    authorTextArea.insertBefore(authorInput, authorTextContent)
                    authorTextContent.style.display = 'none'
                }
                authorTextArea.addEventListener('click', createAuthorInput, once)

                // if user clicks on pages text content, allow edit
                const pageTextArea = bookDataIndex[book].querySelector(".newBookPageDiv")    
                const pageTextContent = pageTextArea.querySelector(".newBookPageContent") 
                
                let createPageInput = function() {
                    const pageInput = document.createElement('input')
                    pageInput.type = 'text'
                    pageInput.classList.add("editInput")
                    pageInput.placeholder = pageTextContent.innerText
                    pageTextArea.insertBefore(pageInput, pageTextContent)
                    pageTextContent.style.display = 'none'
                    
                }
                pageTextArea.addEventListener('click', createPageInput, once)

                
                // enable checkbox button in card
                const newBookIsReadContent = bookDataIndex[book].querySelector('.newBookIsReadContent')
                newBookIsReadContent.disabled = false;                
                
                let editConfirmButton = bookDataIndex[book].querySelector('.confirmBtn')
                editConfirmButton.addEventListener('click', () => {
                    
                    // title updates
                    if (titleTextArea.querySelector('input') !== null) {
                        let newTitleOutput = titleTextArea.querySelector('input').value
                        
                        if (newTitleOutput === '') {
                            this.books[book].title = titleTextContent.innerText
                        } else {
                            titleTextContent.innerText = newTitleOutput
                            this.books[book].title = newTitleOutput
                        }
                        titleTextArea.querySelector('input').remove() // removes input field
                        titleTextContent.style.display = '' //toggle title content back
                        
                    } // author updates 
                    if (authorTextArea.querySelector('input') !== null) {
                        let newAuthorOutput = authorTextArea.querySelector('input').value
                        
                        if (newAuthorOutput === '') {
                            this.books[book].author = authorTextContent.innerText
                        } else {
                            authorTextContent.innerText = newAuthorOutput
                            this.books[book].author = newAuthorOutput
                        }
                        authorTextArea.querySelector('input').remove() // removes input field
                        authorTextContent.style.display = '' //toggle author content back
                
                    } // page updates
                    if (pageTextArea.querySelector('input') !== null) {
                        let newPageOutput = pageTextArea.querySelector('input').value

                        if (newPageOutput === '') {
                            this.books[book].pages = pageTextContent.innerText
                        } else {
                            pageTextContent.innerText = newPageOutput
                            this.books[book].pages = newPageOutput
                        }
                        pageTextArea.querySelector('input').remove() // removes input field
                        pageTextContent.style.display = '' //toggle author content back
                        
                    } // isRead updates
                    this.books[book].isRead = newBookIsReadContent.checked
                    newBookIsReadContent.disabled = true

                    titleTextArea.removeEventListener('click', createTitleInput);
                    authorTextArea.removeEventListener('click', createAuthorInput);
                    pageTextArea.removeEventListener('click', createPageInput);
                    confirmBtn.remove() //delete confirm button
                    toggleEditButton.style.display = '' //toggle edit button back
                    }, {once : true});
                
                // update array object key value switch of true || false
                // add event listener for confirm button
                // switch button text back to edit

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
