// use of access specifiers in class

// access modifiers
// access modifiers can only be used in typecript files 
//access modifiers are denoted with public,private and protected keywords 
// by default all the members inside of the class are defined publicly 

//public -- can be accessed anywhere in the program 
// private -- are only accessible within its class scope 
//protected -- accessible within its class scope as well as the class extending the parent class containing the protected member 

//example

class Employee {

    public name: string;
    public id: number;                      // available publicly
    constructor(name: string) {             //default constructor parameter type is string 
        this.name = name;
    }
    //making a public function to greet the emplyee with name 
    greet() {                                                        //default access of greet function is also public 
        console.log(`Hello, Good Morning ${this.name}`)
    }
    printid() { console.log(this.convertString(this.id)); }             // using the private function inside the class itself

    //private
    private convertString(num: number) {                                      // can only be used within its class scope/boundary
        return num.toString();
    }

    //protected
    protected getid(empid: number) {                                               // protected method can only be used within its class or in the inherited class
        return this.id = empid;
    }
}

// creating a inherited class Manager 
class Manager extends Employee {
    managerid() {
        console.log("manager id is " + this.getid(1234));                // calling the getid function inside the inherited class manager 
    }
}

//creating object of class Employee
let obj = new Employee("Yash");
obj.greet();

//creating object of class MAnager 
let obj1 = new Manager("shourya");
obj1.greet();
obj1.managerid();

//console.log(obj.convertString());
// let num = 23;
// console.log(convertString(num));
// this will return an error message because converttoString is an private method and cannot be used outside the class

export { }
