export class Shap {
    private color:string;
    private filled:boolean;

    constructor(color:string, filled:boolean) {
        this.color = color ?? "red";
        this.filled = filled ?? true;
    }

    public getColor():string {
        return this.color;
    }

    public setColor(color:string):void {
        this.color = color;
    }

    public isFilled():boolean {
        return this.filled;
    }

    public setFilled(filled:boolean):void {
        this.filled = filled;
    }

    public toString():string {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}

export class Circle extends Shap {
    private radius:number;
    
    constructor(radius:number, color:string, filled:boolean){
        super(color, filled);
        this.radius = radius;
    }

    public getRadius():number {
        return this.radius;
    }

    public setRadius(radius:number):void {
        this.radius = radius;
    }

    public getArea():number {
        const area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }

    public getPerimeter():number {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }

    public toString():string {
        return `Circle[Shape[color=${this.getColor()}, filled=${this.isFilled()}], radius=${this.radius}]`
    }
}

export class Rectangle extends Shap {
    private width:number;
    private length:number;

    constructor(width:number, length:number, color:string, filled:boolean){
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    public getWidth():number {
        return this.width;
    }

    public setWidth(width:number):void {
        this.width = width;
    }

    public getLength():number {
        return this.length;
    }

    public setLength(length:number):void {
        this.length = length;
    }

    public getArea():number {
        return 0;
    }

    public getPerimeter():number {
        return 0;
    }
}