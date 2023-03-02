class Employee {
    protected name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public get data(): string {
        return `Name: ${this.name} , Age: ${this.age} `;
    }
}

class Fresher extends Employee {
    protected collegeName: string;
    protected department: string;
    protected salary: number;
    protected batchYear: number;                                                  //single level inheritence 
    constructor(name: string, age: number, collegeName: string, department: string, salary: number, batchYear: number) {
        super(name, age);
        this.collegeName = collegeName;
        this.department = department;
        this.batchYear = batchYear;
        this.salary = 15000;
    }
    public get data(): string {
        return `${super.data} , College: ${this.collegeName} , Department: ${this.department},batchYear: ${this.batchYear}, Salary: ${this.salary} `;
    }

}

class Developer extends Fresher {                                               //multi level inheritence 
    protected experience: number | string
    protected role: string;
    constructor(name: string, age: number, collegeName: string, department: string, salary: number, batchYear: number, experience: string, role: string) {
        super(name, age, collegeName, department, salary, batchYear);
        this.experience = experience
        this.role = role;
        this.salary = salary;
    }

    public get data(): string {
        return `${super.data} , Experience: ${this.experience} , Role: ${this.role}`;
    }

}

const developer = new Developer("XYZ", 25, "ABC institute", "CSE", 500000, 2019, "3years", "Full Stack Developer");
console.log(developer.data);

//