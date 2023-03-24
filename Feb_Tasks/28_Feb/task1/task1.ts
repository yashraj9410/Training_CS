//class in  typescript

//creating a class to accept firstname,lastname and age 
class Person {
    firstName: string
    lastName: string
    age: number
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age
    }
    get getPerson(): string {
        return `firstname: ${this.firstName}, lastname: ${this.lastName}, age: ${this.age}`
    }
}

// function to display the data entered on th html page 
function showdata() {
    let fname = (document.getElementById("firstname") as HTMLInputElement).value;
    let lname = (document.getElementById("lastname") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;

    //creating a new object of class Person
    const newPerson = new Person(fname, lname, parseInt(age))

    //displaying data on the html page 
    let display = (document.getElementById("displaycontent") as HTMLHeadingElement);
    display.innerHTML += newPerson.getPerson + "<br>";
}

