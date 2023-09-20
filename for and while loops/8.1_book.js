const book1={
    name:"Harry Potter and the Philosopher's Stone",
    author:"J. K. Rowling",
    published :1997,
    gener: "Fantasy, Children's fiction"
}

function descripeAbook(book){
    console.log(`The book ${book.name} was written by ${book.author} in the year ${book.published}`);
}
descripeAbook(book1);
