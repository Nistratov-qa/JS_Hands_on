const { Figure } = require('./baseFigure');
const { Utils } = require('../utils/utils');

class Quadrangle extends Figure {
    sides;
    constructor(arr) {
        super(arr);
        if (new.target === Quadrangle) {
            try {
                throw new Error("Can not create instance of this class");
            } catch (e) {
                console.log(e.stack);
            }
        }
        this.sides = Utils.culcAllSides(this.points);
    }

    setSides() {
        throw new Error("Method 'setSides()' must be implemented.");
    }
}
module.exports = { Quadrangle };