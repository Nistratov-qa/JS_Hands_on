const { Point } = require('../baseClasses/point');

class Utils {

    static createPoints(array) {
        const tempArr = array;
        const arrOfArrays = [];
        const arrLength = 3;
        let arrOfPoints;
        while (tempArr.length) arrOfArrays.push(tempArr.splice(0, arrLength));
        arrOfPoints = arrOfArrays.map(el => new Point(el[0], el[1], el[2]));
        // console.log(arrOfPoints);
        return arrOfPoints;
    }
    static culcAllSides(points) {
        let sides = [];

        if ((points.length < 3)) {
            console.log('There are less than 3 points! No figure can be created!');
        } else if (points.length == 3) {
            let ab = Math.sqrt(((points[0].x - points[1].x) ** 2) + ((points[0].y - points[1].y) ** 2));
            let bc = Math.sqrt(((points[1].x - points[2].x) ** 2) + ((points[1].y - points[2].y) ** 2));
            let ca = Math.sqrt(((points[2].x - points[0].x) ** 2) + ((points[2].y - points[0].y) ** 2));
            sides.push(Math.round(Math.abs(ab)));
            sides.push(Math.round(Math.abs(bc)));
            sides.push(Math.round(Math.abs(ca)));
        } else if (points.length == 4) {
            let ab = Math.sqrt(((points[0].x - points[1].x) ** 2) + ((points[0].y - points[1].y) ** 2));
            let bc = Math.sqrt(((points[1].x - points[2].x) ** 2) + ((points[1].y - points[2].y) ** 2));
            let cd = Math.sqrt(((points[2].x - points[3].x) ** 2) + ((points[2].y - points[3].y) ** 2));
            let da = Math.sqrt(((points[3].x - points[0].x) ** 2) + ((points[3].y - points[0].y) ** 2));
            sides.push(Math.round(Math.abs(ab)));
            sides.push(Math.round(Math.abs(bc)));
            sides.push(Math.round(Math.abs(cd)));
            sides.push(Math.round(Math.abs(da)));
        } else {
            console.log('No figure can be created based on provided points!');
        }
        return sides;
    }
    static determineTypeOfTriangle(sides) {
        const uniqueSides = new Set(sides);
        const sideA = sides.sort()[0];
        const sideB = sides.sort()[1];
        const hupotenuse = sides.sort()[2];

        if (uniqueSides.size == 1) {
            return 'ThreeEqSidesTr';
        } else if (uniqueSides.size == 2) {
            return 'TwoEqSidesTr';
        } else if ((hupotenuse ** 2) == (sideA ** 2) + (sideB ** 2)) {
            return 'RightTr';
        } else {
            return 'Triangle';
        }

    }
    static determineTypeOfQuadrangle(sides, points) {
        const uniqueSides = new Set(sides);

        if (uniqueSides.size == 2) {
            return 'Rectangle';
        } else if (uniqueSides.size == 1) {
            const ac = Math.sqrt(((points[0].x - points[2].x) ** 2) + ((points[0].y - points[2].y) ** 2));
            const bd = Math.sqrt(((points[1].x - points[3].x) ** 2) + ((points[1].y - points[3].y) ** 2));
            const diagonal1 = Math.round(Math.abs(ac));
            const diagonal2 = Math.round(Math.abs(bd));
            if (diagonal1 == diagonal2) {
                return 'Square';
            } else {
                return 'Rhombus';
            }
        } else {
            return 'Quadrangle';
        }

    }

}
module.exports = { Utils };