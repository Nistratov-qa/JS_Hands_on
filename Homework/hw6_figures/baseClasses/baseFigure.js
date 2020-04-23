const { Point } = require('../baseClasses/point');

class Figure {
    points;
    constructor(arr) {
        if (new.target === Figure) {
            try {
                throw new Error("Can not create instance of this class");
            } catch (e) {
                console.log(e.stack);
            }
        }
        this.createPoints(arr);
    }
    
    createPoints(array){
        const tempArr = array;
        const arrOfArrays = [];
        const arrLength = 3;
        while(tempArr.length) arrOfArrays.push(tempArr.splice(0, arrLength));
        this.points = arrOfArrays.map( el => new Point(el[0], el[1], el[2]));
    }

    getType() {
        return Object.getPrototypeOf(this);
    }
    getSquare() {
        throw new Error("Method 'getSquare()' must be implemented.");
    }
    getPerimeter() {
        throw new Error("Method 'getPerimeter()' must be implemented.");
    }
}
module.exports = { Figure };