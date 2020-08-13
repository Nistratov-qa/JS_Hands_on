/* 
OOP in JS
-Composition (to create multy inheritence)
-Array  - it is an object with an iterators
-methods: map, filter ...
-method types: changing initial array and just creating new one
-arr.splice()

HW:
1. Read about arrow functions in the link from the presentation
2. Create own methods for forEach(), 
3. a.sort() - do not use for numbers (change in prject)

export default function() {
 
 class Point {
 x: number;
 y: number;
 name: string;
 }
 
 interface IPoints {
 [key: string] : Point
 }
 
 class PointsCollection {
 points : IPoints;
 
 constructor(points: Point[]) {
 points.forEach(p => {
 this.points[p.name] = p 
 })
 }
 
 add(point: Point) {
 // check
 // this.points.push(point);
 }
 
 min(name: string) : Point {
 // const index = this.points.findIndex(p => p.name === name);
 // if (index === -1) return null;
 // return this.points.splice(index,1)[0];
 
 return this.points[name];
 }
 
 forEach(cb) {
 this.points.forEach(cb)
 }
 }
 
}

*/

let a = [1, 2, 3];
let b = [4, 5, 6];

a = a.concat(b);

