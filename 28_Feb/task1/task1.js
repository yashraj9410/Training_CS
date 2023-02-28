//class in  typescript
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
var yash = new Person("Yash", "Raj", 21);
console.log(yash);
