/* 
Async
-tick - min time step

HW:
1. read the article 
2. stackoverflow - what value and why?
3. 

*/

console.log(0);

setTimeout(() => console.log(1), 1000)

console.log(2);

Promise.resolve().then(() => console.log(3));

setTimeout(() => console.log(4), 4)
setTimeout(() => console.log(5), 3)
setTimeout(() => console.log(6), 2)

new Promise((res) => {
    res();
}).then(() => console.log(7));

setTimeout(() => console.log(8), 1)

console.log(9)

function ten() {
    console.log(10)
}

ten();