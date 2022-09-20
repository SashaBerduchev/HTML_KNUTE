 class Librery{
    books = new Map();
    Name
    Addres
    constructor(Name, Address) {
        this.Addres = Address;
        this.Name = Name;
    }

    methodAdd(Name, Author, Year, Ivent_num, Price){
        let book = new Book(Name, Author, Year, Ivent_num, Price);
        this.books.set(book);
        console.log(book);
    }

    getName(){
        console.log(this.Name);
        return this.Name;
    }
    getAddres(){
        console.log(this.Addres);
        return this.Addres;
    }

    showLibrery(){
        return this.books;
    }
}

