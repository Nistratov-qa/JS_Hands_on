/* 
- RxJS
- Observable
const stream$ = new Observable
- AJAX

HW:
1. read about Generators
2. read about Rxjs

*/

import { Observable } from 'rxjs'

export default async function () {

    const promise = new Promise((res, rej) => {
        setInterval(() => {
            res("1000");
        }, 1000)
    })

    const stream$ = new Observable((observer) => {
        let a = setInterval(() => {
            observer.next("1000");
        }, 1000)

        setTimeout(() => {
            clearInterval(a);
            observer.complete();
        }, 5400)
    })

    promise.then((data) => {
        console.log(`Promise ${data}`)
    }).catch((err) => {
        console.log(`Promise err ${err}`)
    }).finally(() => {
        console.log(`Promise filal`)
    })

    stream$.subscribe((data) => {
        console.log(`Stream ${data}`)
    }, (err) => {
        console.log(`Stream err ${err}`)
    }, () => {
        console.log(`Stream completed`)
    })

    // of(1,2,3,4,5).subscribe((d) => console.log(d));
    // [1,2,3,4,6,7].filter()

    from([1, 2, 3, 4, 5, 6, 7, 8])
        .pipe(
            tap((v) => console.log(`Tap mehtod with v:${v}`)),
            map((v) => {
                let temp = v ** 2;
                console.log(`Map mehtod with v:${v} and t:${temp}`)
                return temp;
            }),
            filter((v) => {
                return v > 4
            })
        )
        .subscribe((d) => console.log(d));

}