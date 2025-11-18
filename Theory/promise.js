// Promise is an js object, which represents the eventual completion or failure of asynchronous function.
// You can create promise with the promise constructor

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p1 get resolve")
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 get resolve")
    }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p3 get resolve")
    }, 1000);
})

// Promise methods :

// Promise.all :-
// 1. All get resolve - array of resolve result.
// 2. All get rejected - 1st rejected promise's err msg.
// 3. ASA 1st promise get reject it will through err msg 
// What if all promise get rejected at same time?

Promise.all([p2, p1, p3]).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    })

//Promise.allSettled :-
// 1. It will wait for all promises to get settled
// 2. Result : Array of object, With status, Value and reason(err)

// Promise.allSettled([p1, p2, p3]).then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// Promise.race :-
// 1. All gets rejected : 1st rejected promise
// 2. 1st settled promise

// Promise.race([p2, p1, p3]).then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// Promise.any :-
// 1. It will wait to resolve any promise 1st
// 2. Result : 1st resolved promise
// 3. All gets fail : Aggregated error of all promises

Promise.any([p1,p2,p3]).then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
        console.log(err.errors)
    })