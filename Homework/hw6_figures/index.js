const {Circle} = require('./figures/circle');
const {Figure} = require('./baseClasses/baseFigure');
const {ThreeEqSidesTr} = require('./figures/treeEqSidesTr');
const {TwoEqSidesTr} = require('./figures/twoEqSidesTr');
const {RightTr} = require('./figures/rightTr');

const pointC = [1, 1, 'A']
let circle1 = new Circle(pointC, 10);
// console.log(circle1.getType());
// console.log(circle1.getSquare());
// console.log(circle1.getPerimeter());

const pointTr = [1, 1, 'A', 2, 2, 'B', 1, 3, 'C']
let equilTr = new ThreeEqSidesTr(pointTr);
// console.log(equilTr.getType());
// console.log(equilTr.getSquare());
// console.log(equilTr.getPerimeter());

const pointsForTwoEqualSides = [1, 1, 'A', 6, 3, 'B', 1, 5, 'C'];
let twoEqTriangle = new TwoEqSidesTr(pointsForTwoEqualSides);
// console.log(twoEqTriangle.getType());
// console.log(twoEqTriangle.getSquare());
// console.log(twoEqTriangle.getPerimeter());

const pointsForRightTr = [1, 1, 'A', 6, 1, 'B', 1, 5, 'C'];
let rightTriangle = new RightTr(pointsForRightTr);
console.log(rightTriangle.getType());
console.log(rightTriangle.getSquare());
console.log(rightTriangle.getPerimeter());

// let figure = new Figure(pointC); //error expected


