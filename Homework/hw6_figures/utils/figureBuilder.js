const { Utils } = require('../utils/utils');
const { Circle } = require('../figures/circle');
const { ThreeEqSidesTr } = require('../figures/treeEqSidesTr');
const { TwoEqSidesTr } = require('../figures/twoEqSidesTr');
const { RightTr } = require('../figures/rightTr');
const { Triangle } = require('../baseClasses/triangle');
const { Rectangle } = require('../figures/rectangle');
const { Square } = require('../figures/square');
const { Rhombus } = require('../figures/rhombus');
const { Quadrangle } = require('../baseClasses/quadrangle');

class FigureBuilder {

    static buildFigure(array, arg = null) {
        let points = Utils.createPoints(array);
        // console.log(points);

        if (arg !== null) {
            return new Circle(array, arg);
        } else {
            let sides = Utils.culcAllSides(points);
            let amountOfSides = sides.length;

            if (amountOfSides == 3) {
                let figureType = Utils.determineTypeOfTriangle(sides);
                switch (figureType) {
                    case 'ThreeEqSidesTr':
                        return new ThreeEqSidesTr(array);
                    case 'TwoEqSidesTr':
                        return new TwoEqSidesTr(array);
                    case 'RightTr':
                        return new RightTr(array);
                    case 'Triangle':
                        return new Triangle(array);
                }
            } else if (amountOfSides == 4) {
                let figureType = Utils.determineTypeOfQuadrangle(sides, points);
                switch (figureType) {
                    case 'Rectangle':
                        return new Rectangle(array);
                    case 'Square':
                        return new Square(array);
                    case 'Rhombus':
                        return new Rhombus(array);
                    case 'Quadrangle':
                        return new Quadrangle(array);
                }
            } else {
                try {
                    throw new Error('The figure does not exist');
                } catch (error) {
                    console.log(error.stack);
                }
            }
        }
    }

}
module.exports = { FigureBuilder };