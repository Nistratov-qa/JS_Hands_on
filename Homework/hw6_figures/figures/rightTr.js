const { Triangle } = require('../baseClasses/triangle');

class RightTr extends Triangle {
    constructor(arr){
        super(arr);
        this.culcAllSides();
        this.setSides();
    }
    hupotenuse;
    sideA;
    sideB;
    
    getSquare() {
        return (this.sideA * this.sideB) / 2;
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.hupotenuse;
    }
    setSides(){
        this.sideA = this.sides.sort()[0];
        this.sideB = this.sides.sort()[1];
        this.hupotenuse = this.sides.sort()[2];
    }
    // isRightTriangle(){
    //     return (this.hupotenuse ** 2) == (this.sideA ** 2) + (this.sideB ** 2); 
    // }
}
module.exports = { RightTr };