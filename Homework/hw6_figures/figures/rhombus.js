const {Quadrangle} = require('../baseClasses/quadrangle');

class Rhombus extends Quadrangle {
    constructor(arr){
        super(arr);
        this.setSides();
        this.setDiagonals();
    }
    sideA;
    diagonal1;
    diagonal2;

    getSquare() {
        return (this.diagonal1 * this.diagonal2) / 2;
    }
    getPerimeter() {
        return (this.sideA *4);
    }
    setSides(){
        this.sideA = this.sides[0];
    }
    setDiagonals(){
        if(this.points.length < 4) {
            console.log('There are less than 4 points!')
        } else {
        let ac = Math.sqrt(((this.points[0].x - this.points[2].x) ** 2) + ((this.points[0].y - this.points[2].y) ** 2));
        let bd = Math.sqrt(((this.points[1].x - this.points[3].x) ** 2) + ((this.points[1].y - this.points[3].y) ** 2));
        this.diagonal1 = Math.round(Math.abs(ac));
        this.diagonal2 = Math.round(Math.abs(bd));
        }
    }
}
module.exports = {Rhombus};