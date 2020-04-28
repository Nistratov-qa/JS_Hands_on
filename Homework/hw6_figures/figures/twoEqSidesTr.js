const { Triangle } = require('../baseClasses/triangle');

class TwoEqSidesTr extends Triangle {
    constructor(arr) {
        super(arr);
        this.setSides();
    }
    uniqueSide;
    repitbleSide;

    getSquare() {
        let s = 0, a = this.uniqueSide, b = this.repitbleSide;
        return s = (a/4) * (Math.sqrt((4*(b**2)) - (a**2)));

    }
    getPerimeter() {
        return this.uniqueSide + 2*this.repitbleSide;
    }
    setSides() {
        let a = [];
        let b = [];
        this.sides.forEach( el => {
            if(this.sides.filter(x => x==el).length == 1){
                a.push(el);
            }else{
                b.push(el);
            }
        });
        this.uniqueSide = a[0];
        this.repitbleSide = b[0];
    }
    // isTwoEqSidesTriangle(){
    //     let uniqueValues = Array.from(new Set(this.sides));
    //     return uniqueValues.length > 2 ? false : true; 
    // }
}
module.exports = { TwoEqSidesTr };