/* 
- Async /Await (works )
- Generators 
function*
yield (break)
.next() (value or done?)
- streams ?
- Observers
Pull and Push strategies

HW:
1. read about Generators
2. read about Rxjs

*/

function makeCounter(start = 0) {
    return ()=> {
        return start++;
    }
}

function* naturalNumber() {
    let num = 1;
    while (true) {
        yield num;
        num = num + 1;
    }
}

const numbers = naturalNumber();
console.log(numbers.next().value);
console.log(numbers.next().value);

