class Employee{
    protected name:string 
    protected age :number 

    constructor (name:string,age:number){
        this.name=name;
        this.age = age ;
    }

    public data():string{
        return `Name: ${this.name} , Age: ${this.age} `;
    }
}

class Fresher extends Employee{               
    protected collegename:string;
    protected department:string ;
    protected salary:number;
    protected batchyear:number;                                                  //single level inheritence 
    constructor(name:string,age:number, collegename:string,department:string,salary:number,batchyear:number){
        super(name,age);
        this.collegename=collegename;
        this.department=department;
        this.batchyear=batchyear;
        this.salary=15000;
    }
    public data():string{
        return `${super.data()} , College: ${this.collegename} , Department: ${this.department},Batchyear: ${this.batchyear}, Salary: ${this.salary} `;
    }

}

class Developer extends Fresher{                                               //multi level inheritence 
    protected experience:number | string
    protected role :string ;
    constructor(name:string,age:number, collegename:string,department:string, salary:number, batchyear:number,experience:string,role:string){
        super(name,age,collegename,department ,salary,batchyear);
        this.experience=experience
        this.role=role;
        this.salary =salary;
    }
    
    public data():string{
        return `${super.data()} , Experience: ${this.experience} , Role: ${this.role}`;
    }

}

const developer = new Developer("XYZ",25,"ABC institute","CSE",500000,2019,"3years","Full Stack Developer");
console.log(developer.data());

export{}