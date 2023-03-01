"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.data = function () {
        return "Name: ".concat(this.name, " , Age: ").concat(this.age, " ");
    };
    return Employee;
}());
var Fresher = /** @class */ (function (_super) {
    __extends(Fresher, _super);
    function Fresher(name, age, collegename, department, salary, batchyear) {
        var _this = _super.call(this, name, age) || this;
        _this.collegename = collegename;
        _this.department = department;
        _this.batchyear = batchyear;
        _this.salary = 15000;
        return _this;
    }
    Fresher.prototype.data = function () {
        return "".concat(_super.prototype.data.call(this), " , College: ").concat(this.collegename, " , Department: ").concat(this.department, ",Batchyear: ").concat(this.batchyear, ", Salary: ").concat(this.salary, " ");
    };
    return Fresher;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, collegename, department, salary, batchyear, experience, role) {
        var _this = _super.call(this, name, age, collegename, department, salary, batchyear) || this;
        _this.experience = experience;
        _this.role = role;
        _this.salary = salary;
        return _this;
    }
    Developer.prototype.data = function () {
        return "".concat(_super.prototype.data.call(this), " , Experience: ").concat(this.experience, " , Role: ").concat(this.role);
    };
    return Developer;
}(Fresher));
var developer = new Developer("XYZ", 25, "ABC institute", "CSE", 500000, 2019, "3years", "Full Stack Developer");
console.log(developer.data());
