"use strict";
//typescript is mainly used in static checking 
// enums in  typescript helps to create a distinct set of constants which can be assigned to a string or numeric value 
// these set of constants help in creating functionalities for specific cases of the enum constants 
exports.__esModule = true;
//consider a cart item in a online shopping website may have the status of wishlisted , bought , pending , removed 
//these all functionalities can be stored under an enum 
// enum creates an immediately invoked function in javascript 
//example of enum 
var itemstatus;
(function (itemstatus) {
    itemstatus[itemstatus["removed"] = 0] = "removed";
    itemstatus[itemstatus["bought"] = 1] = "bought";
    itemstatus[itemstatus["wishlisted"] = 2] = "wishlisted";
    itemstatus[itemstatus["pending"] = 3] = "pending";
})(itemstatus || (itemstatus = {}));
//by default the value is set to 0.....n for n items in the enum
//accessing the enum values 
var itemremoved = itemstatus.removed; // if item is removed 
console.log(itemremoved);
//we can also assign constant string values to enum member 
var userdata;
(function (userdata) {
    userdata["valid"] = "yes";
    userdata["age"] = "age"; // we can assign constant string literals to enum members 
})(userdata || (userdata = {}));
// an enum member can contain value belonging to :
// 1. any string literal 
// 2. any numeric value 
// 3. any negative numeric value 
//enums behave like an objects at the runtime and can be passed around to functions as an object
var E;
(function (E) {
    E[E["x"] = 10] = "x";
    E[E["y"] = 11] = "y";
})(E || (E = {}));
function func(obj) {
    return obj.x;
}
console.log(func(E)); //enum passed as an object in the runtime 
