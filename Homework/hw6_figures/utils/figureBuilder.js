const {Point} = require('../baseClasses/point');
const {Circle} = require('../figures/circle');
const {ThreeEqSidesTr} = require('./figures/treeEqSidesTr');
const {TwoEqSidesTr} = require('./figures/twoEqSidesTr');
const {RightTr} = require('./figures/rightTr');
const {Rectangle} = require('./figures/rectangle');
const {Square} = require('./figures/square');
const {Rhombus} = require('./figures/rhombus');

class FigureBuilder {

    static buildFigure(array, arg = null) {

        if (arg !== null) {
            return new Circle(array, arg);
        } else {
            let pointsAmount = array.length / 3;
            switch (pointsAmount) {
                case 3:

                break;
                case 4:

                break;
                default:
                    try {
                        throw new Error('The figure does not exist');
                    } catch (error) {
                        console.log(error.stack);
                    }
            }
        }
    }

}
module.exports = {FigureBuilder};