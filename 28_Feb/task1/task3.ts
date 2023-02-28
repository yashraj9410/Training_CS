//typescript is mainly used in static checking 
// enums in  typescript helps to create a distinct set of constants which can be assigned to a string or numeric value 
// these set of constants help in creating functionalities for specific cases of the enum constants 

//consider a cart item in a online shopping website may have the status of wishlisted , bought , pending , removed 
//these all functionalities can be stored under an enum 
// enum creates an immediately invoked function in javascript 

//example of enum 

enum itemstatus {
    removed,
    bought,
    wishlisted,
    pending
}

//by default the value is set to 0.....n for n items in the enum

//accessing the enum values 
const itemremoved = itemstatus.removed  // if item is removed 
console.log(itemremoved);

//we can also assign constant string values to enum member 

enum userdata {
    valid = "yes",
    age = "age"             // we can assign constant string literals to enum members 
}

// an enum member can contain value belonging to :
// 1. any string literal 
// 2. any numeric value 
// 3. any negative numeric value 

//enums behave like an objects at the runtime and can be passed around to functions as an object
enum E {
    x = 10, y
}

function func(obj: { x: number }): number {
    return obj.x;
}
console.log(func(E)); //enum passed as an object in the runtime 

export { }


//enum at compile time are stored in the form of key value pairs 

type enumstring = keyof typeof E;
function printenum(key: enumstring, message: string) {
    const num = E[key];
    if (num <= E.y) {
        console.log("key:", key)
        console.log("value:", num)
        console.log(message)
    }
}

printenum("x", "key and value at compile time ")

// ----------------------------------INTERFACES------------------
//interfaces in typescript 
//interfaces are similar to types in typesript 
//interface also contains method \
//interface hides the things that are happening behind the scenes
interface product {
    name: string,
    readonly id: number,
    status(): string,
    getpurchaseId(prodname: string): number

}

//we can redeclare a interface and modify the properties 
interface product {
    use: string
}
//added one more member use
const shampoo = { name: "clinic+", id: 23234, status: () => { return "product dispatched" }, getpurchaseId: (prodname: "shampoo") => { return 123 }, use: "hairs" }
shampoo.status();

// we can do inheritence in interface 

interface childproduct extends product {
    producttype: string
}
const babyshampoo = { name: "clinic+", producttype: "childcare", id: 234, status: () => { return "product in cart " }, getpurchaseId: (prodname: "shampoo") => { return 145 }, use: "hairs" }

export{}