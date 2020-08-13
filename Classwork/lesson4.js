function multy(a){
    // a = 1;
    return function(b){
        // b = 2;
        return function(c){
            // c = 3;
            return function(d){
                // d = 4;
                return a*b*c*d;
            }
        }
    }
}

// let num = multy(1)(2)(3)(4);
// console.log(num);

//========================================

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
 
// let res1 = fn3(fn2(fn1(matrix1)));
// console.log(res1);

function compose1 (...args) {
    let comp = (value) => args.reduceRight((acc, fn) => fn(acc), value);
    return comp(matrix1);
} 


 console.log(compose1(fn1, fn2, fn3));
let superOpetration = compose(fn1, fn2, fn3);
let superOpetration2 = compose(fn2, fn2, fn2);
let superPuper = compose(superOpetration, superOpetration2);
let superPuperDuper = compose(superPuper, fn2, superPuper, fn3, superOpetration2);
 
let res2 = superPuperDuper(matrix);