// static class in js
// static methods are directly called on the class
// static keyword defines static methods for class

class Person{
    static gender; 
    static age ;      
    
    constructor(name){
        this.name=name;
    }

    static setVal(age,gender){
        this.age=age;
        this.gender=gender;
    }

    static getVal(){
        console.log(this.gender,this.age);
    }

    static greet(boy){                                    // boy is an object which is sent as a parameter to the static method greet
        console.log("hello how are you" +boy.name);
    }
    
}


let obj = new Person("Yash")
Person.setVal(21,"male");        // we dont make the use of objects in case of static members
Person.getVal();
Person.greet(obj);               // we can sent object as an argument to the static method