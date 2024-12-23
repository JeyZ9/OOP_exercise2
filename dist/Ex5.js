"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRate = exports.Visit = exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
        this.member = false;
        this.memberType = "";
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(type) {
        this.memberType = type;
    }
    toString() {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}
exports.Customer = Customer;
class Visit {
    constructor(name) {
        this.customer = new Customer(name);
        this.date = this.formatDate(new Date());
        this.serviceExpense = 0;
        this.productExpense = 0;
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    getName() {
        return this.customer.getName();
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(ex) {
        this.serviceExpense = ex;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(ex) {
        this.productExpense = ex;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return `Visit[customer=${this.customer.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}
exports.Visit = Visit;
class DiscountRate {
    constructor() {
        this.serviceDiscountPremium = 0.2;
        this.serviceDiscountGold = 0.15;
        this.serviceDiscountSilver = 0.1;
        this.productDiscountPremium = 0.1;
        this.productDiscountGold = 0.1;
        this.productDiscountSilver = 0.1;
    }
    getServiceDiscountRate(type) {
        switch (type.toLowerCase()) {
            case "premium":
                return this.serviceDiscountPremium;
            case "gold":
                return this.serviceDiscountGold;
            case "silver":
                return this.serviceDiscountSilver;
            default:
                return 0;
        }
    }
    getProductDiscountRate(type) {
        switch (type.toLowerCase()) {
            case "premium":
                return this.productDiscountPremium;
            case "gold":
                return this.productDiscountGold;
            case "silver":
                return this.productDiscountSilver;
            default:
                return 0;
        }
    }
}
exports.DiscountRate = DiscountRate;
