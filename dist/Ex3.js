"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = exports.Student = exports.Person = void 0;
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    toString() {
        return `Person[name=${this.name}, address=${this.address}]`;
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    getProgram() {
        return this.program;
    }
    setProgram(program) {
        this.program = program;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getFee() {
        return this.fee;
    }
    setFee(fee) {
        this.fee = fee;
    }
    toString() {
        return `Student[${super.toString()}, program=${this.program}, year=${this.year}, fee=${this.fee}]`;
    }
}
exports.Student = Student;
class Staff extends Person {
    constructor(name, address, school, pay) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }
    getPay() {
        return this.pay;
    }
    setPay(pay) {
        this.pay = pay;
    }
    toString() {
        return `Staff[${super.toString()}, school=${this.school}, pay=${this.pay}]`;
    }
}
exports.Staff = Staff;
