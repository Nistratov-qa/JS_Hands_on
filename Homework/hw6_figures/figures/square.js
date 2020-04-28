const {Quadrangle} = require('../baseClasses/quadrangle');

class Square extends Quadrangle {
    constructor(arr){
        super(arr);
        this.setSides();
    }
    sideA;

    getSquare() {
        return (this.sideA **2);
    }
    getPerimeter() {
        return (this.sideA *4);
    }
    setSides(){
        this.sideA = this.sides[0];
    }
}
module.exports = {Square};