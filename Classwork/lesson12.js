/* 
Async /Await

HW:
1. create findSum()
2. 

*/

const timer = function (time, shouldFail = false) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (shouldFail) {
                rej();
            } else {
                res();
            }
        }, time)
    })
}

timer(3000).then(() => {

})

// O(n) = 1, n, log(n), n*n , n!
// 1.2s 7s

const every = function (arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i]))
            return false;
    }
    return true;
}

const some = function (arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]))
            return true;
    }
    return false;
}

function findSum(arr, sum) { // [1,2,3,4,5,6,7,8], 5 -> [[0,3],[1,2]]

}