/* 
Promise

-new Promise((resolve, reject) => {}) 
-starting status is PENDING
-then()
-finally()
-catch()

HW:
1. create own Proxy();

*/

// const request = new Promise((resolve, reject) => {
// const req = fetch("/1");
// req.then((res) => {
// if (res.ok) {
// return res.json();
// }
// else {
// reject(res);
// }
// }).then((data) => {
// if (data) {
// resolve(data);
// } else {
// reject("empty data")
// }
// })
// });

// request.then((data: any[]) => {
// console.log("resolved", data);
// return data.map(el => ({
// title: el.title,
// text: el.content
// }))
// }).then(arr => {
// return arr.filter(el => el.title.indexOf("Vlad") !== -1)
// }).then(vladArray => {

// })

// request.then(() => {
// console.log("resolved1");
// })

let buff;
fetch("/server.js")
    .then((res) => {
        buff = res;
        return res.json()
    })
    .catch((err) => {
        if (err.type === "no a json") {
            return buff.text()
        } else {

        }
    })
    .then((data) => {
        if (typeof data === "string") {

        } else {

        }
    })

// function lol(a,b,c) {
// return a + b;
// }

// lol.length

// Promise.resolve().then(() => {

// })

// Promise.reject().catch

let pr1 = fetch("/1"); // $ 5
let pr2 = fetch("/2"); // rain 4
let pr3 = fetch("/3"); // inbox 7 - 50/50

const arr = [pr1, pr2, pr3];

const arrAlwaywayResolved = arr.map((pr) => {
    return new Promise((res, rej) => {
        pr.then((data) => {
            res({
                completed: true,
                data
            });
        }).catch((err) => {
            res({
                completed: false,
                data: err
            });
        })
    })
})

Promise.all(arrAlwaywayResolved).then((results) => {
    results.forEach(r => {
        if (r.completed) {

        } else {

        }
    })
})
// confirm
Promise.race([pr1, pr2, pr3]).then(() => {

})