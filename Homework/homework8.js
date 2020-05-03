function forEach1(arr, cb, thisArg) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++){
            cb.call(thisArg, arr[i], i, arr);
        }
        
    } else return console.log('This is not an array');
}

function map1(arr, cb, thisArg) {
    if (Array.isArray(arr)) {
        let results = [];
        for (let i = 0; i < arr.length; i++){
            results.push(cb.call(thisArg, arr[i], i, arr));
        }
        return results;
        
    } else return console.log('This is not an array');
}

function filter1(arr, cb, thisArg) {
    if (Array.isArray(arr)) {
        let results = [];
        for (let i = 0; i < arr.length; i++){
            if (cb.call(thisArg, arr[i], i, arr)) {
                results.push(arr[i]);
              }
        }
        return results;
        
    } else return console.log('This is not an array');
}

function some1(arr, cb, thisArg) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++){
            if (cb.call(thisArg, arr[i], i, arr)) {
                return true;
              }
        }
        return false;
        
    } else return console.log('This is not an array');
}

function every1(arr, cb, thisArg) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++){
            if (!cb.call(thisArg, arr[i], i, arr)) {
                return false;
              }
        }
        return true;
        
    } else return console.log('This is not an array');
}

function reduce1(arr, cb, acc = null) {
    if (Array.isArray(arr)) {
        let startFrom, result;
        if (acc == null) {
            result = arr[0];
            startFrom = 1;
        } else {
            result = acc;
            startFrom = 0;
        }
        // let result = acc == null ? arr[0] : acc;
        for (let i = startFrom; i < arr.length; i++){
            result = cb.call(null, result, arr[i], i, arr);
        }
        return result;
        
    } else return console.log('This is not an array');
}

console.log('================= forEach ===================');
let nums1 = [10, 20, 30, 40];
forEach1(nums1, i => i **2);
let nums2 = [10, 20, 30, 40];
nums2.forEach(i => i **2)
console.log(nums1);
console.log(nums2);

console.log('================= map ===================');
let toMap = [10, 20, 30, 40];
let myMap = map1(toMap, i => i / 10);
let nativeMap = toMap.map(i => i / 10);
console.log(myMap);
console.log(nativeMap);

console.log('================= filter ===================');
let toFilter = [10, 11, 20, 21, 30, 31, 40, 41];
let myFilter = filter1(toFilter, i => i % 2 == 0);
let nativeFilter = toFilter.filter(i => i % 2 == 0);
console.log(myFilter);
console.log(nativeFilter);

console.log('================= some ===================');
let toSome = [10, 11, 20, 21, 30, 31, 40, 41];
console.log(some1(toSome, i => i == 21)); //true
console.log(toSome.some(i => i == 21)); //true

console.log('================= every ===================');
let toEvery = [10, 11, 20, 21, 30, 31, 40, 41];
console.log(every1(toEvery, i => typeof i == 'number')); //true
console.log(toEvery.every(i => typeof i == 'number')); //true

console.log('================= reduce ===================');
let toReduce = [10, 11, 20, 21, 30, 31, 40, 41];
console.log(reduce1(toReduce, (acc, i) => acc + i));
console.log(toReduce.reduce((acc, i) => acc + i, 0));