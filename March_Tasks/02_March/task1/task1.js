"use strict";
//generics in type script
exports.__esModule = true;
// generics are used to make reusable code 
// generic locks the paramter type and return type of any function
function func(val) {
    return val;
}
function getuser(val) {
    return val;
}
//here all parameters and return type id set to interface type user 
// using array with generics 
function getSearchElement(products) {
    return products[3];
    //we cannot directly return the index 3 because return type will also shift to element of array 
    // that means if i am taking a parameter an array then return type T signifies that a value from the array must be returned 
    // to return a number we must set return type of function from  T to number 
}
//creating a arrow function
var getElement = function (products) {
    return products[3];
};
var userDetails = function (val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
};
console.log(userDetails("Not Permitted", { name: "Yash", id: 123 }));
//  generics classes 
//here we are going to use generic because we dont know what sort of products are gonnna pass into my product array 
var Products = /** @class */ (function () {
    function Products() {
        this.products = [];
    }
    Products.prototype.addToCart = function (product) {
        this.products.push(product);
    };
    Products.prototype.displayProducts = function () {
        console.log(this.products);
    };
    return Products;
}());
var obj = new Products();
obj.addToCart("coke");
obj.addToCart(231);
obj.displayProducts();
