const myLibrary = [];
let bookIndex = 0;
let removeIndex = 0;
let submitBtn = document.getElementById("submit-button");

let formBookTitle = document.getElementById("title");
let formBookAuthor = document.getElementById("author");
let formBookPublisher = document.getElementById("publisher");
let formBookSerialNum = document.getElementById("serialNumber");
let formBookNumPages = document.getElementById("numPages");

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
    
    let row = document.createElement("tr")

    let cellBookTitle= document.createElement("td")
    cellBookTitle.textContent=bookObj.bookTitle;

    let cellBookAuthor= document.createElement("td")
    cellBookAuthor.textContent=bookObj.bookAuthor;

    let cellBookPublisher= document.createElement("td")
    cellBookPublisher.textContent=bookObj.bookPublisher;

    let cellBookSerialNumber= document.createElement("td")
    cellBookSerialNumber.textContent=bookObj.bookSerialNum

    let cellBookNumPages= document.createElement("td")
    cellBookNumPages.textContent=bookObj.bookNumPages;

    let cellBookReadStatus= document.createElement("td")
    let cellBookReadStatusBtn = document.createElement("button")
    
    bookIndex++;
    cellBookReadStatusBtn.innerText=bookObj.bookReadStatus
    cellBookReadStatusBtn.setAttribute("class",bookIndex)
    cellBookReadStatus.appendChild(cellBookReadStatusBtn)

    cellBookReadStatusBtn.addEventListener("click",()=>{
        if(cellBookReadStatusBtn.innerText=="Read"){
            cellBookReadStatusBtn.innerText="Not Read"
            updateReadStatusInArray(cellBookReadStatusBtn.className,"Not Read")
        }
        else{
            cellBookReadStatusBtn.innerText="Read"
            updateReadStatusInArray(cellBookReadStatusBtn.className,"Read")
        }
    })

    let cellRemove = document.createElement("td");
    let removeBookBtn = document.createElement("button");
    removeIndex++;
    removeBookBtn.innerText = "Delete"
    removeBookBtn.setAttribute("class",removeIndex)
    cellRemove.appendChild(removeBookBtn);

  

    libraryTable.appendChild(row);
    row.appendChild(cellBookTitle);
    row.appendChild(cellBookAuthor);
    row.appendChild(cellBookPublisher);
    row.appendChild(cellBookSerialNumber);
    row.appendChild(cellBookNumPages);
    row.appendChild(cellBookReadStatus);
    row.appendChild(cellRemove);

}
function updateReadStatusInArray(indexOfBook,updatedReadStatus){
    myLibrary[parseInt(indexOfBook)-1].bookReadStatus = updatedReadStatus;
}

function getReadStatus(){
    let readStatus
    if(document.getElementById("readStatusRead").checked){
        readStatus = document.getElementById("readStatusRead").value;
    }
    else{
        readStatus = document.getElementById("readStatusNotRead").value;
    }
    return readStatus
}


submitBtn.addEventListener("click",function (e) {
   
    const newBook  = new Book(formBookTitle.value,formBookAuthor.value,formBookPublisher.value,formBookSerialNum.value,formBookNumPages.value,getReadStatus());
    myLibrary.push(newBook)
    addBookToLibrary(newBook);
    document.getElementById("bookForm").reset();
    e.preventDefault();
    
});


