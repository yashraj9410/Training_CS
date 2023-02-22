// access modifiers
// access modifiers can only bne used in typecript files 
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
    Employee.prototype.convertString = function (num) {
        return num.toString();
    };
    return Employee;
}());
var obj = new Employee("Yash");
obj.greet();
var num = 23;
console.log(convertString(num));
