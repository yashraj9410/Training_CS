class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get data() {
        return `Name: ${this.name} , Age: ${this.age} `;
    }
}
class Fresher extends Employee {
    constructor(name, age, collegename, department, salary, batchyear) {
        super(name, age);
        this.collegename = collegename;
        this.department = department;
        this.batchyear = batchyear;
        this.salary = 15000;
    }
    get data() {
        return `${super.data} , College: ${this.collegename} , Department: ${this.department},Batchyear: ${this.batchyear}, Salary: ${this.salary} `;
    }
}
class Developer extends Fresher {
    constructor(name, age, collegename, department, salary, batchyear, experience, role) {
        super(name, age, collegename, department, salary, batchyear);
        this.experience = experience;
        this.role = role;
        this.salary = salary;
    }
    get data() {
        return `${super.data} , Experience: ${this.experience} , Role: ${this.role}`;
    }
}
const developer = new Developer("XYZ", 25, "ABC institute", "CSE", 500000, 2019, "3years", "Full Stack Developer");
console.log(developer.data);
//
