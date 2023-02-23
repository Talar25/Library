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


let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    addBookToLibrary() {
        // do stuff here
        return myLibrary.push(this);
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
        container.innerHTML += `
        <div class="book">
        <h3 class="heading-tertiary">${title.value}</h3>
        <p class="author">${author.value}</p>
        <p class="pages">${pages.value}</p>
        <button class="read-button">${read.value = 'on' ? 'read' : 'not read'}</button>
        <button class="remove-button">Remove</button>
    </div>`

    addBox.classList.remove('active')
    }

})