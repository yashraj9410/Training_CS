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

function showdata() {
    let fname = (document.getElementById("firstname") as HTMLInputElement).value;
    let lname = (document.getElementById("lastname") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;
    const newPerson = new Person(fname, lname, parseInt(age))
    let display = (document.getElementById("displaycontent") as HTMLHeadingElement);
    display.innerHTML += newPerson.getPerson + "<br>";
    console.log(newPerson.getPerson);
}

