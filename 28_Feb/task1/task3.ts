//typescript is mainly used in static checking 
// enums in  typescript helps to create a distinct set of constants which can be assigned to a string or numeric value 
// these set of constants help in creating functionalities for specific cases of the enum constants 

//consider a cart item in a online shopping website may have the status of wishlisted , bought , pending , removed 
//these all functionalities can be stored under an enum 
// enum creates an immediately invoked function in javascript 

//example of enum 

enum itemstatus{
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

enum userdata{
    valid = "yes",
    age ="age"             // we can assign constant string literals to enum members 
}

// an enum member can contain value belonging to :
   // 1. any string literal 
   // 2. any numeric value 
   // 3. any negative numeric value 

//enums behave like an objects at the runtime and can be passed around to functions as an object
enum E {
    x=10,y
}

function func(obj:{x:number}):number {
    return obj.x;
}
console.log(func(E)); //enum passed as an object in the runtime 

export{}