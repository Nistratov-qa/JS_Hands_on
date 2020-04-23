const { Figure } = require('../baseClasses/baseFigure');
const { Point } = require('../baseClasses/point');

class Triangle extends Figure {

    constructor(arr) {
        super(arr);
        if (new.target === Triangle) {
            try {
                throw new Error("Can not create instance of this class");
            } catch (e) {
                console.log(e.stack);
            }
        }
    }
    sides =[];

    culcAllSides(){
        if(this.points.length < 3) {
            console.log('There are less than 3 points!')
        } else {
        let ab = Math.sqrt(((this.points[0].x - this.points[1].x) ** 2) + ((this.points[0].y - this.points[1].y) ** 2));
        let bc = Math.sqrt(((this.points[1].x - this.points[2].x) ** 2) + ((this.points[1].y - this.points[2].y) ** 2));
        let ca = Math.sqrt(((this.points[2].x - this.points[0].x) ** 2) + ((this.points[2].y - this.points[0].y) ** 2));
        this.sides.push(Math.round(Math.abs(ab)));
        this.sides.push(Math.round(Math.abs(bc)));
        this.sides.push(Math.round(Math.abs(ca)));
        // console.log(this.sides);
        // return this.sides;
        }
    }
    getSquare() {
        throw new Error("Method 'getSquare()' must be implemented.");
    }
    getPerimeter() {
        throw new Error("Method 'getPerimeter()' must be implemented.");
    }
}
module.exports = { Triangle };

