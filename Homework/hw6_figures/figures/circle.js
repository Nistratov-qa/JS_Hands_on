const {Figure} = require('../baseClasses/baseFigure');
const { Utils } = require('../utils/utils');

class Circle extends Figure {
    radius = 0;
    constructor(arr, radius) {
        super(arr);
        this.radius = radius;
    }

    getSquare() {
        return ((this.radius ** 2) * Math.PI).toFixed(2);
    }
    getPerimeter() {
        return (2 * this.radius * Math.PI).toFixed(2);
    }
}
module.exports = {Circle};

