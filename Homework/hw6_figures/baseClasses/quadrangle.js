const {Figure} = require('./baseFigure');

class Quadrangle extends Figure {
    constructor(arr){
        super(arr);
        if (new.target === Quadrangle) {
            try {
                throw new Error("Can not create instance of this class");
            } catch (e) {
                console.log(e.stack);
            }
        }
    }
    sides =[];

    culcAllSides(){
        if(this.points.length < 4) {
            console.log('There are less than 4 points!')
        } else {
        let ab = Math.sqrt(((this.points[0].x - this.points[1].x) ** 2) + ((this.points[0].y - this.points[1].y) ** 2));
        let bc = Math.sqrt(((this.points[1].x - this.points[2].x) ** 2) + ((this.points[1].y - this.points[2].y) ** 2));
        let cd = Math.sqrt(((this.points[2].x - this.points[3].x) ** 2) + ((this.points[2].y - this.points[3].y) ** 2));
        let da = Math.sqrt(((this.points[3].x - this.points[0].x) ** 2) + ((this.points[3].y - this.points[0].y) ** 2));
        this.sides.push(Math.round(Math.abs(ab)));
        this.sides.push(Math.round(Math.abs(bc)));
        this.sides.push(Math.round(Math.abs(cd)));
        this.sides.push(Math.round(Math.abs(da)));
        }
    }
    setSides(){
        throw new Error("Method 'setSides()' must be implemented.");
    }
}
module.exports = {Quadrangle};