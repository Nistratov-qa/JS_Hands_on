const { Point } = require('../baseClasses/point');

class Utils {

    static createPoints(array) {
        const tempArr = array;
        const arrOfArrays = [];
        const arrLength = 3;
        while (tempArr.length) arrOfArrays.push(tempArr.splice(0, arrLength));
        return arrOfArrays.map(el => new Point(el[0], el[1], el[2]));
    }

    static culcAllSides(points) {
        let sides = [];

        if (points.length < 3) {
            console.log('There are less than 3 points! No figure can be created!')
        } else {
            if (points.length == 3) {
                let ab = Math.sqrt(((points[0].x - points[1].x) ** 2) + ((points[0].y - points[1].y) ** 2));
                let bc = Math.sqrt(((points[1].x - points[2].x) ** 2) + ((points[1].y - points[2].y) ** 2));
                let ca = Math.sqrt(((points[2].x - points[0].x) ** 2) + ((points[2].y - points[0].y) ** 2));
                sides.push(Math.round(Math.abs(ab)));
                sides.push(Math.round(Math.abs(bc)));
                sides.push(Math.round(Math.abs(ca)));
            } else {
                if (points.length == 4) {
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
            }

        }
        return sides;
    }

}
module.exports = { Utils };