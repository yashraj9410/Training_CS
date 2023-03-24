// use of access specifiers in class
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
// access modifiers
// access modifiers can only be used in typecript files 
//access modifiers are denoted with public,private and protected keywords 
// by default all the members inside of the class are defined publicly 
//public -- can be accessed anywhere in the program 
// private -- are only accessible within its class scope 
//protected -- accessible within its class scope as well as the class extending the parent class containing the protected member 
//example
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    //making a public function to greet the emplyee with name 
    Employee.prototype.greet = function () {
        console.log("Hello, Good Morning ".concat(this.name));
    };
    Employee.prototype.printid = function () { console.log(this.convertString(this.id)); }; // using the private function inside the class itself
    //private
    Employee.prototype.convertString = function (num) {
        return num.toString();
    };
    //protected
    Employee.prototype.getid = function (empid) {
        return this.id = empid;
    };
    return Employee;
}());
// creating a inherited class Manager 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.managerid = function () {
        console.log("manager id is " + this.getid(1234)); // calling the getid function inside the inherited class manager 
    };
    return Manager;
}(Employee));
//creating object of class Employee
var obj = new Employee("Yash");
obj.greet();
//creating object of class MAnager 
var obj1 = new Manager("shourya");
obj1.greet();
obj1.managerid();
//console.log(obj.convertString());
// let num = 23;
// console.log(convertString(num));                                    // this will return an error message because converttoString is an private method and cannot be used outside the class
