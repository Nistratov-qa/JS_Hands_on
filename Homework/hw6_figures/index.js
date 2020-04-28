const { Figure } = require('../hw6_figures/baseClasses/baseFigure');
const { Circle } = require('../hw6_figures/figures/circle');
const { ThreeEqSidesTr } = require('./figures/treeEqSidesTr');
const { TwoEqSidesTr } = require('./figures/twoEqSidesTr');
const { RightTr } = require('./figures/rightTr');
const { Rectangle } = require('./figures/rectangle');
const { Square } = require('./figures/square');
const { Rhombus } = require('./figures/rhombus');

const pointC = [1, 1, 'A']
let circle2 = new Circle(pointC, 10);
console.log(circle2.getType());
console.log(circle2.getSquare());
console.log(circle2.getPerimeter());

const pointTr = [1, 1, 'A', 2, 2, 'B', 1, 3, 'C']
let equilTr = new ThreeEqSidesTr(pointTr);
console.log(equilTr.getType());
console.log(equilTr.sides);
console.log(equilTr.getSquare());
console.log(equilTr.getPerimeter());

const pointsForTwoEqualSides = [1, 1, 'A', 6, 3, 'B', 1, 5, 'C'];
let twoEqTriangle = new TwoEqSidesTr(pointsForTwoEqualSides);
console.log(twoEqTriangle.getType());
console.log(twoEqTriangle.sides);
console.log(twoEqTriangle.getSquare());
console.log(twoEqTriangle.getPerimeter());

const pointsForRightTr = [1, 1, 'A', 6, 1, 'B', 1, 5, 'C'];
let rightTriangle = new RightTr(pointsForRightTr);
console.log(rightTriangle.getType());
console.log(rightTriangle.sides);
console.log(rightTriangle.getSquare());
console.log(rightTriangle.getPerimeter());

const pointsForRectangle = [1, 1, 'A', 3, 1, 'B', 3, 5, 'C', 1, 5, 'D'];
let rectangle = new Rectangle(pointsForRectangle);
console.log(rectangle.getType());
console.log(rectangle.sides);
console.log(rectangle.getSquare());
console.log(rectangle.getPerimeter());

const pointsForSquare = [1, 1, 'A', 4, 1, 'B', 4, 4, 'C', 1, 4, 'D'];
let square = new Square(pointsForSquare);
console.log(square.getType());
console.log(square.sides);
console.log(square.getSquare());
console.log(square.getPerimeter());

const pointsForRhombus = [4, 1, 'A', 7, 3, 'B', 4, 5, 'C', 1, 3, 'D'];
let rhombus = new Rhombus(pointsForRhombus);
console.log(rhombus.getType());
console.log(rhombus.sides);
console.log(rhombus.diagonal1);
console.log(rhombus.diagonal2);
console.log(rhombus.getSquare());
console.log(rhombus.getPerimeter());

let figure = new Figure(pointC); //error expected


