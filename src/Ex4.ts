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
        this.radius = radius ?? 1.0;
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
        return `Circle[${super.toString()}, radius=${this.radius}]`
    }
}

export class Rectangle extends Shap {
    private width:number;
    private length:number;

    constructor(width:number, length:number, color:string, filled:boolean){
        super(color, filled);
        this.width = width ?? 1.0;
        this.length = length ?? 1.0;
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
        const area:number = this.width * this.length;
        return area;
    }

    public getPerimeter():number {
        const perimeter:number = (this.width + this.length) * 2;
        return perimeter;
    }

    public toString():string {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}

export class Square extends Rectangle {
    constructor(side:number , color:string, filled:boolean){
        super(side, side, color, filled);
    }

    public getSide():number {
        return this.getWidth();
    }

    public setSide(side:number):void {
        this.setWidth(side);
        this.setLength(side);
    }

    public getArea():number {
        return super.getArea();
    }

    public getPerimeter(): number {
        return super.getPerimeter();
    }

    public toString(): string {
        return `Square[${super.toString()}]`;
    }

}