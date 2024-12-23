export class Author {
    private name:string;
    private email:string;

    constructor(name:string, email:string){
        this.name = name;
        this.email = email;
    }

    public getName():string{
        return this.name;
    }

    public getEmail():string{
        return this.email;
    }

    public setEmail(email:string):void{
        this.email = email;
    }

    public toString():string{
        return `Author[name=${this.name}, email=${this.email}]`
    }
}

export class Book{
    private name:string;
    private authors:Author[];
    private price:number;
    private qty:number;

    constructor(name:string, authors:Author[], price:number, qty?:number){
    this.name = name;
    this.authors = authors;
    this.price = price;
    this.qty = qty ?? 0;
    }
    
    public getName():string{
        return this.name;
    }

    public getAuthors():Author[]{
        return this.authors;
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(price:number):void{
        this.price = price
    }

    public getQty():number{
        return this.qty;
    }

    public setQty(qty:number):void{
        this.qty = qty;
    }

    public toString():string{
        return `Book[name=${this.name}, authors={${this.authors}}, price=${this.price}, qty=${this.qty}]`;
    }

    public getAuthorNames():string{
        let authorNames:any = this.authors.map(name => name.getName());
        return authorNames.join(", ");
    }

}

// const authors = [
//   new Author("Jey", "Jey@gmail.com"),
//   new Author("Jey2", "Jey2@gmail.com"),
// ];

// const book = new Book("test Book", authors, 39.99);
// console.log(book.getAuthorNames());