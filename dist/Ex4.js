"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Circle = exports.Shap = void 0;
class Shap {
    constructor(color, filled) {
        this.color = color !== null && color !== void 0 ? color : "red";
        this.filled = filled !== null && filled !== void 0 ? filled : true;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}
exports.Shap = Shap;
class Circle extends Shap {
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius !== null && radius !== void 0 ? radius : 1.0;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        const area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }
    getPerimeter() {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
    toString() {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}
exports.Circle = Circle;
class Rectangle extends Shap {
    constructor(width, length, color, filled) {
        super(color, filled);
        this.width = width !== null && width !== void 0 ? width : 1.0;
        this.length = length !== null && length !== void 0 ? length : 1.0;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        const area = this.width * this.length;
        return area;
    }
    getPerimeter() {
        const perimeter = (this.width + this.length) * 2;
        return perimeter;
    }
    toString() {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}
exports.Rectangle = Rectangle;
class Square extends Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
    }
    getSide() {
        return this.getWidth();
    }
    setSide(side) {
        this.setWidth(side);
        this.setLength(side);
    }
    getArea() {
        return super.getArea();
    }
    getPerimeter() {
        return super.getPerimeter();
    }
    toString() {
        return `Square[${super.toString()}]`;
    }
}
exports.Square = Square;
