//generics in type script

// generics are used to make reusable code 
// generic locks the paramter type and return type of any function

function func<Type>(val: Type): Type {
    return val;
}

// in the above function the func<Type> means that func will log the given parameter type and will return the same type 
//example if val is Type number then function return type will be automattialy set to number 
// that is the function saying that if i get number type them i am going to return a number type 

// function func<T>(val:T):T{} sometimes this declaratio is also used 

// if we want to create our own type 

interface User {
    name: string;
    age: number;
}

function getuser<Type extends User >(val: Type): User {
    return val;
}

//here all parameters and return type id set to interface type user 

// using array with generics 

function getSearchElement<T>(products: T[]): T {
    return products[3];
    //we cannot directly return the index 3 because return type will also shift to element of array 
    // that means if i am taking a parameter an array then return type T signifies that a value from the array must be returned 
    // to return a number we must set return type of function from  T to number 

}

//creating a arrow function

const getElement = <T>(products: T[]): T => {
    return products[3];
}

//<T,> signifies that it is not an html or jsx tag mainly in react 

// using extends in generics 
// extends in generics may be used to signify type that may belong to another entity e.g interface

interface userData {
    name: string
    id: number
}

const userDetails = <T, U extends userData>(val1: T, val2: U): object => {
    return {
        val1,
        val2
    }
}

console.log(userDetails("Not Permitted", { name: "Yash", id: 123 }))
// generics classes 

export { }


//  generics classes 
//here we are going to use generic because we dont know what sort of products are gonnna pass into my product array 
class Products<T>{ 
    private products:T[]=[];

    public addToCart(product:T){
        this.products.push(product);
    }

    public displayProducts():void{
        console.log(this.products);
    }
}

const obj = new Products();
obj.addToCart("coke");
obj.addToCart(231);
obj.displayProducts();