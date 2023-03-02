"use strict";
// polymorphism , abstraction , encapsulation
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//abstract class for defining methods 
var Product = /** @class */ (function () {
    function Product(name, id, exp, quan) {
        this.name = name;
        this.id = id;
        this.exp = exp;
        this.quan = quan;
    }
    return Product;
}());
//class for a guest user 
var Shampoo = /** @class */ (function (_super) {
    __extends(Shampoo, _super);
    function Shampoo(name, id, exp, price, quan) {
        var _this = _super.call(this, name, id, exp, quan) || this;
        _this.price = price;
        return _this;
    }
    Shampoo.prototype.display = function () {
        console.log("Product Name: ".concat(this.name, ", Status: ").concat(this.status(), ",  Price:").concat(this.price, " , Quantity: ").concat(this.quan, " , Cart Value : ").concat(this.cartVal("dove", "dove")));
    };
    Shampoo.prototype.available = function () {
        if (this.name === "Dove") {
            return true;
        }
        return false;
    };
    Shampoo.prototype.status = function () {
        if (this.available()) {
            return "Available ";
        }
        return " Not Available";
    };
    Shampoo.prototype.cartVal = function (item1, item2, item3) {
        if (item1 && item2 && item3) {
            return this.price * 3;
        }
        else if (item1 && item2) {
            return this.price * 2;
        }
        else {
            return this.price;
        }
    };
    return Shampoo;
}(Product));
//class for already a user
var MemberShampoo = /** @class */ (function (_super) {
    __extends(MemberShampoo, _super);
    function MemberShampoo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.discount = 50; // member user will get a discount of 50
        return _this;
    }
    MemberShampoo.prototype.display = function () {
        console.log("Product Name: ".concat(this.name, ", Status: ").concat(this.status(), ", Discounted Price:").concat(this.price - this.discount, " Quantitiy:").concat(this.quan, "  Cart Value : ").concat(this.cartVal("dove")));
    };
    return MemberShampoo;
}(Shampoo));
var guest = new Shampoo("Dove", 1213, "12/10/2025", 249, 2); //creating object of type shampoo for a guest user 
guest.display();
var user = new MemberShampoo("Dove", "1213", "2025", 249, 1); // same product for an old user 
user.display();
