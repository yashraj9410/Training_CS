//Polymorphism , abstraction , Encapsulation in typescript 

// polymorphism , abstraction , encapsulation

//abstract class for defining methods 
abstract class Product {                                                         //creating abstract class product 
    name: string;
    protected id: number | string;                                               // using protected members to hide data (Encapsulation )
    exp: string;
    constructor(name: string, id: number | string, exp: string) {
        this.name = name;
        this.id = id;
        this.exp = exp;
    }
    protected abstract available(): boolean;                                     // abstract method to check availability of product

    protected abstract status(): string;

    public abstract display(): void;                                                // returning the status to customer 
}


//class for a guest user 
class Shampoo extends Product {
    protected price: number;
    constructor(name: string, id: number | string, exp: string, price: number) {
        super(name, id, exp);
        this.price = price;
    }

    public display(): void {
        console.log(`Product Name: ${this.name}, Status: ${this.status()},  Price:${this.price}`)
    }

    available() {                                                       // using the abstract methods 
        if (this.name === "Dove") { return true }
        return false;

    }

    status(): string {
        if (this.available()) { return `Available ` }
        return ` Not Available`;
    }

}

//class for already a user
class MemberShampoo extends Shampoo {

    discount: number = 50;                                                                   // member user will get a discount of 50

    public display(): void {                                                                  // overriding the method (Runtime Polymorphism)                 
        console.log(`Product Name: ${this.name}, Status: ${this.status()}, Discounted Price:${this.price - this.discount}`)
    }

}


const guest = new Shampoo("Dove", 1213, "12/10/2025", 249)                           //creating object of type shampoo for a guest user 
console.log(guest.display());

const user = new MemberShampoo("Dove", "1213", "2025", 249);                           // same product for an old user 
console.log(user.display());


export{}