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
}

//creating a new person object
const yash = new Person("Yash","Raj",21);
//displaying the data entered by the person 
console.log(yash);