export class Customer {
    private name:string;
    private member:boolean;
    private memberType:string;

    constructor(name:string){
        this.name = name;
        this.member = false;
        this.memberType = "";
    }

    public getName():string {
        return this.name;
    }

    public isMember():boolean {
        return this.member;
    }

    public setMember(member:boolean):void {
        this.member = member;
    }

    public getMemberType():string {
        return this.memberType;
    }

    public setMemberType(type:string):void {
        this.memberType = type;
    }

    public toString():string {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}

export class Visit {
    private customer:Customer;
    private date:string;
    private serviceExpense:number;
    private productExpense:number;

    constructor(name:string){
        this.customer = new Customer(name);
        this.date = this.formatDate(new Date());
        this.serviceExpense = 0;
        this.productExpense = 0;
    }

    private formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    public getName():string {
        return this.customer.getName();
    }

    public getServiceExpense():number {
        return this.serviceExpense;
    }

    public setServiceExpense(ex:number):void {
        this.serviceExpense = ex;
    }

    public getProductExpense():number {
        return this.productExpense;
    }

    public setProductExpense(ex:number):void {
        this.productExpense = ex;
    }

    public getTotalExpense():number {
        return this.serviceExpense + this.productExpense;
    }

    public toString(): string {
        return `Visit[customer=${this.customer.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
    }
}

export class DiscountRate {
    private serviceDiscountPremium:number;
    private serviceDiscountGold:number;
    private serviceDiscountSilver:number;

    private productDiscountPremium:number;
    private productDiscountGold:number;
    private productDiscountSilver:number;

    constructor(){
        this.serviceDiscountPremium = 0.2;
        this.serviceDiscountGold = 0.15;
        this.serviceDiscountSilver = 0.1;

        this.productDiscountPremium = 0.1;
        this.productDiscountGold = 0.1;
        this.productDiscountSilver = 0.1;
    }

    public getServiceDiscountRate(type:string):number {
        switch(type.toLowerCase()){
            case "premium":
                return this.serviceDiscountPremium
            case "gold":
                return this.serviceDiscountGold
            case "silver":
                return this.serviceDiscountSilver
            default:
                return 0;
        }
    }

    public getProductDiscountRate(type:string):number {
        switch(type.toLowerCase()){
            case "premium":
                return this.productDiscountPremium
            case "gold":
                return this.productDiscountGold
            case "silver":
                return this.productDiscountSilver
            default:
                return 0;
        }
    }
}