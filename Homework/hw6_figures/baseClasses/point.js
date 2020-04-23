class Point {
    x = 0;
    y = 0;
    name = '';
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
}
module.exports = {Point};

// let points;
// const pointTr = [1, 1, 'A', 2, 2, 'B', 1, 3, 'C']

// let fn = function(arr) {
//     const tempArr = arr;
//     const arrOfArrays = [];
//     const arrLength = 3;
//     while(tempArr.length) arrOfArrays.push(tempArr.splice(0, arrLength));
//     // console.log(arrOfArrays);

//     points = arrOfArrays.map( el => new Point(el[0], el[1], el[2]));

//     return points;
// }

// console.log(fn(pointTr));

