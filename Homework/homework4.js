const matrix1 = [1,2,3];

function fn1(matrix) {                  
    return matrix.map(el => el + 1); 
} 
function fn2(matrix) {
    return matrix.map(el => el - 1);
}
function fn3(matrix) {
    return matrix.map(el => el + 2);
}

const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value);

let superOpetration = compose(fn1, fn2, fn3);  
let superOpetration2 = compose(fn2, fn2, fn2);
let superPuper = compose(superOpetration, superOpetration2);
let superPuperDuper = compose(superPuper, fn2, superPuper, fn3, superOpetration2);

let res1 = superOpetration(matrix1);
console.log(res1);
let res2 = superOpetration2(matrix1);
console.log(res2);
let res3 = superPuper(matrix1);
console.log(res3);
let res4 = superPuperDuper(matrix1);
console.log(res4);