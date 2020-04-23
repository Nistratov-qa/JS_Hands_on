const {Circle} = require('./figures/circle');
const {Figure} = require('./baseClasses/baseFigure');
const {Equilateral} = require('./figures/equilateralTr');

const pointC = [1, 1, 'A']
let circle1 = new Circle(pointC, 10);
// console.log(circle1.getType());
// console.log(circle1.points);
// console.log(circle1.getSquare());
// console.log(circle1.getPerimeter());

const pointTr = [1, 1, 'A', 2, 2, 'B', 1, 3, 'C']

let equilTr = new Equilateral(pointTr);
// console.log(equilTr.getType());
// console.log(equilTr.getSquare());
// console.log(equilTr.getPerimeter());

// let figure = new Figure(pointC); //error expected


