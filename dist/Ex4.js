"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = exports.Shap = void 0;
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
        this.radius = radius;
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
        return `Circle[Shape[color=${this.getColor()}, filled=${this.isFilled()}], radius=${this.radius}]`;
    }
}
exports.Circle = Circle;
class Rectangle extends Shap {
    constructor(width, length, color, filled) {
        super(color, filled);
        this.width = width;
        this.length = length;
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
        return 0;
    }
    getPerimeter() {
        return 0;
    }
}
exports.Rectangle = Rectangle;
