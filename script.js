'use strict'

const button = document.querySelector('.add-button')
const addBox = document.querySelector('.add-box')
const body = document.querySelector('body');
const container = document.querySelector('.container')
const submit = document.querySelector('.submit-button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const readButton = document.querySelectorAll('.read-button');


let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeRead () {
        return this.read = 'Read' ? 'Not read yet' : 'Read';
    }

    static addBookToLibrary(book) {
        // do stuff here
        myLibrary.push(book);

      }

    static show () {
        container.textContent = "";
        return  myLibrary.forEach(book => {
            container.innerHTML += `
            <div class="book">
            <h3 class="heading-tertiary">${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="pages">${book.pages}</p>
            <button class="${book.read === 'Read' ? 'read-button' : 'read-button not'}">${book.read}</button>
            <button class="remove-button">Remove</button>
        </div>`
        })
    }

    removeBookFromLibrary () {
        // do some stuff here
    }
}

//testing

// const lotr = new Book ('Lord of the rings', 'J.R.R. Tolkien', 256, 'Read');
// lotr.addBookToLibrary()
// console.log(myLibrary)
// const harryPotter = new Book ('Harry Potter', 'J.K. Rowling', 500, 'Read');
// harryPotter.addBookToLibrary()
// console.table(myLibrary)

//Add a new book panel
button.addEventListener('click', () => {
    addBox.classList.toggle('active')
})


window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        addBox.classList.remove('active')
    } 
})


//adding a new book


submit.addEventListener('click', () => {
    if(title.value && author.value && pages.value) {
        const isRead = read.checked ? 'Read' : 'Not read yet'
        const card = new Book (title.value, author.value, pages.value, isRead);
        
        Book.addBookToLibrary(card);
        removeChar();
        Book.show();


    addBox.classList.remove('active')
    }

})

const removeChar = function () {
    title.value = ""
    author.value = ""
    pages.value = ""
    read.value = 'unchecked';
}


//changing read/not read

// readButton.forEach(btn => {
//     btn.addEventListener('click', changeRead)
// })

