// polymorphism , abstraction , encapsulation

//abstract class for defining methods 
abstract class Product {                                                         //creating abstract class product 
    name: string;
    protected id: number | string;                                               // using protected members to hide data (Encapsulation )
    exp: string;
    quan:number;
    constructor(name: string, id: number | string, exp: string , quan:number) {
        this.name = name;
        this.id = id;
        this.exp = exp;
        this.quan=quan
    }
    protected abstract available(): boolean;                                     // abstract method to check availability of product

    protected abstract status(): string;

    public abstract display(): void;                                                // returning the status to customer 
}

//class for a guest user 
class Shampoo extends Product {
    protected price: number;
    constructor(name: string, id: number | string, exp: string, price: number,quan:number) {
        super(name, id, exp,quan);
        this.price = price;
    }


    public display(): void {
        console.log(`Product Name: ${this.name}, Status: ${this.status()},  Price:${this.price} , Quantity: ${this.quan} , Cart Value : ${this.cartval("dove","dove")}`)
    }

    available() {                                                       // using the abstract methods 
        if (this.name === "Dove") { return true }
        return false;

    }

    status(): string {
        if (this.available()) { return `Available ` }
        return ` Not Available`;
    }

    cartval(item1:string,item2?:string,item3?:string):number{                      // overloading function cart value for different cart items 
        if(item1 && item2 && item3){return this.price*3 }
        else if(item1 && item2){return this.price*2}
        else{
            return this.price;
        }
    }

}

//class for already a user
class MemberShampoo extends Shampoo {

    discount: number = 50;                                                                   // member user will get a discount of 50

    public display(): void {                                                                  // overriding the method (Runtime Polymorphism)                 
        console.log(`Product Name: ${this.name}, Status: ${this.status()}, Discounted Price:${this.price - this.discount} Quantitiy:${this.quan}  Cart Value : ${this.cartval("dove")}`)
    }

}


const guest = new Shampoo("Dove", 1213, "12/10/2025", 249,2)                           //creating object of type shampoo for a guest user 
guest.display();

const user = new MemberShampoo("Dove", "1213", "2025", 249,1);                           // same product for an old user 
user.display();
//
export{}