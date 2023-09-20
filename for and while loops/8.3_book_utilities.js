const book1={
    name:'And Then There Were None',
    author:'Agatha Christie',
    year:1939
}
const book2={
    name:'A Tale of Two Cities',
    author:'Charles Dickens',
    year:1859
}
const bookUtils={
    getFirstPublished(book1,book2){
        return book1.year<book2.year ?book1:book2;
    },
    setNewEdition(book,year){
        book.latestEdition=year;
    },
    setLanguage(book,language){
        book.language=language;
    },
    setTranslation(book,translator,language){
        book.translation={translator:translator,language:language};
    },
    setPublisher(book,name,location){
        book.publisher={name:name,location:location};
    },
    isSamePublisher(book1,book2){
        if((book1.publisher.name===book2.publisher.name)&&(book1.publisher.location===book2.publisher.location)){
            console.log(book1,book2);
            return true;
        }else{
            return false;
        }
    }
};



