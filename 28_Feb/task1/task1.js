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
            return "firstname: ".concat(this.firstName, ", lastname: ").concat(this.lastName, ", age: ").concat(this.age);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
function showdata() {
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var newPerson = new Person(fname, lname, parseInt(age));
    var display = document.getElementById("displaycontent");
    display.innerHTML += newPerson.getPerson + "<br>";
    console.log(newPerson.getPerson);
}
