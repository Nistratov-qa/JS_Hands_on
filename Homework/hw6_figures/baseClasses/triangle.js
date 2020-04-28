const { Figure } = require('../baseClasses/baseFigure');
const { Utils } = require('../utils/utils');

class Triangle extends Figure {
    sides;
    constructor(arr) {
        super(arr);
        if (new.target === Triangle) {
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
module.exports = { Triangle };

