const { Quadrangle } = require('../baseClasses/quadrangle');

class Rectangle extends Quadrangle {
    constructor(arr) {
        super(arr);
        this.setSides();
    }
    sideA;
    SideB;

    getSquare() {
        return (this.sideA * this.sideB);
    }
    getPerimeter() {
        return (this.sideA + this.sideB) * 2;
    }
    setSides() {
        this.sideA = this.sides.sort()[0];
        this.sideB = this.sides.sort()[3];
    }
}
module.exports = { Rectangle };