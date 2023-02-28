//class in  typescript
//creating a class to accept firstname,lastname and age 
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getPerson", {
        get: function () {
            return "firstname:".concat(this.firstName, ",lastname:").concat(this.lastName, ",age:").concat(this.age);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
//creating a new person object
var newPerson = new Person("Yash", "Raj", 21);
//displaying the data entered by the person 
console.log(newPerson.getPerson);
