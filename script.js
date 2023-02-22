'use strict'

const button = document.querySelector('.add-button')
const addBox = document.querySelector('.add-box')


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

// const lotr = new Book ('Lord of the rings', 'J.R.R. Tolkien', 256, 'Read');
// lotr.addBookToLibrary()
// console.log(myLibrary)
// const harryPotter = new Book ('Harry Potter', 'J.K. Rowling', 500, 'Read');
// harryPotter.addBookToLibrary()
// console.table(myLibrary)


button.addEventListener('click', () => {
    addBox.classList.toggle('active')
})