
// access modifiers
// access modifiers can only bne used in typecript files 
//access modifiers are denoted with public,private and protected keywords 
// by default all the members inside of the class are defined publicly 

//public -- can be accessed anywhere in the program 
// private -- are only accessible within its class scope 
//protected -- accessible within its class scope as well as the class extending the parent class containing the protected member 

//example

class Employee{

    public name:string;                    // available publicly
    
    constructor(name:string){             //default constructor parameter type is string 
        this.name = name;
    }

    //making a public function to greet the emplyee with name 
    greet() {                                                        //default access of greet function is also public 
        console.log(`Hello, Good Morning ${this.name}`)        
    }

    private convertString(num){                                      // can only be used within its class scope/boundary
        return num.toString();
    }

    protected convertString(num){                                      // can only be used within its class scope/boundary
        return num.toString();
    }


}

let obj = new Employee("Yash");
obj.greet();

// let num = 23;
// console.log(convertString(num));                                    // this will return an error message because converttoString is an private method and cannot be used outside the class