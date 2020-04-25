const { Triangle } = require('../baseClasses/triangle');

class ThreeEqSidesTr extends Triangle {
    side = 0;
    constructor(arr){
        super(arr);
        this.culcAllSides();
        this.side = this.sides[0];
    }
    
    getSquare() {
        return ((this.side ** 2) * Math.sqrt(3)) / 4;
    }
    getPerimeter() {
        return this.side * 3;
    }
}
module.exports = { ThreeEqSidesTr };