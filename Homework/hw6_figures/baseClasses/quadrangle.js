const { Figure } = require('./baseFigure');
const { Utils } = require('../utils/utils');

class Quadrangle extends Figure {
    sides;
    constructor(arr) {
        super(arr);
        this.sides = Utils.culcAllSides(this.points);
    }

    setSides() {
        throw new Error("Method 'setSides()' must be implemented.");
    }
}
module.exports = { Quadrangle };