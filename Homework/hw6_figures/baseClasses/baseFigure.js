const { Utils } = require('../utils/utils');

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
        this.points = Utils.createPoints(arr);
        // console.log(this.points);
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