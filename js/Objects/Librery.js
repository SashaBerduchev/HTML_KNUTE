 class Librery{
    books = new Map();
    Name
    Addres
    constructor(Name, Address) {
        this.Addres = Address;
        this.Name = name;
    }

    methodAdd(Name, Author, Year, Ivent_num, Price){
        let book = new Book(Name, Author, Year, Ivent_num, Price);
        this.books.set(book);
    }

    getName(){
        console.log(this.Name);
        return this.Name;
    }
    getAddres(){
        console.log(this.Addres);
        return this.Addres;
    }
}

