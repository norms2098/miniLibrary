const myLibrary = [];
let submitBtn = document.getElementById("submit-button");
let formBookTitle = document.getElementById("title");
let formBookAuthor = document.getElementById("author");
let formBookPublisher = document.getElementById("publisher");
let formBookSerialNum = document.getElementById("serialNumber");
let formBookNumPages = document.getElementById("numPages");
let formBookReadStatus = document.getElementById("readStatus");

let libraryTable = document.getElementById("bookTable");


function Book(title,author,publisher,serialNum,numPages,readStatus){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPublisher = publisher;
    this.bookSerialNum = serialNum;
    this.bookNumPages = numPages;
    this.bookReadStatus = readStatus;

}

function addBookToLibrary(bookObj){
    let row = libraryTable.insertRow();
    let cellBookTitle= row.insertCell();
    cellBookTitle.textContent = bookObj.bookTitle;

    let cellBookAuthor= row.insertCell();
    cellBookAuthor.textContent = bookObj.bookAuthor;

    let cellBookPublisher= row.insertCell();
    cellBookPublisher.textContent = bookObj.bookPublisher;

    let cellBookSerialNumber= row.insertCell();
    cellBookSerialNumber.textContent = bookObj.bookSerialNum;

    let cellBookNumPages= row.insertCell();
    cellBookNumPages.textContent = bookObj.bookNumPages;

    let cellBookReadStatus= row.insertCell();
    cellBookReadStatus.textContent = bookObj.bookReadStatus;
}


submitBtn.addEventListener("submit",() => {
    const newBook  = new Book(formBookTitle.value,formBookAuthor.value,formBookPublisher.value,formBookSerialNum.value,formBookNumPages.value,formBookReadStatus.value);
    myLibrary.push(newBook)
    addBookToLibrary(newBook);
    
});
