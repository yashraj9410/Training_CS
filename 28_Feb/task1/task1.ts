//class in  typescript

//creating a class to accept firstname,lastname and age 
class Person {
    firstName:string
    lastName:string
    age:number
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName
        this.age=age
     }
     get getPerson():string{
        return `firstname:${this.firstName},lastname:${this.lastName},age:${this.age}`
     }
}

//creating a new person object
const newPerson = new Person("Yash","Raj",21)
//displaying the data entered by the person 
console.log(newPerson.getPerson);