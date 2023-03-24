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
    constructor(name, age, collegeName, department, salary, batchYear) {
        super(name, age);
        this.collegeName = collegeName;
        this.department = department;
        this.batchYear = batchYear;
        this.salary = 15000;
    }
    get data() {
        return `${super.data} , College: ${this.collegeName} , Department: ${this.department},batchYear: ${this.batchYear}, Salary: ${this.salary} `;
    }
}
class Developer extends Fresher {
    constructor(name, age, collegeName, department, salary, batchYear, experience, role) {
        super(name, age, collegeName, department, salary, batchYear);
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
