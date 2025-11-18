const API_URL = "https://jsonplaceholder.typicode.com/posts";
const promise = fetch(API_URL);

// console.log(promise) // Pending state
// setTimeout(() => console.log(promise), 5000); //Fulfilled

// promise.then((data) => console.log(data));

//Callback hell
// createOrder(card, function () {
//     proceedToPayment(orderId, function () {
//         showOrderSummery(paymentInFn, function () {
//             paymentInfo();
//         })
//     })
// })

//Promise chaining
// createOrder(card)
//     .then(() => { return proceedToPayment() })
//     .then(() => { return showOrderSummery() })
//     .then(() => { return paymentInfo() })

//Create Promise 

// function createOrder() {
//     const num = -1;
//     const promise = new Promise(function (resolve, reject) {
//         if (num > 0) {
//             const err = new Error("Order is not created")
//             reject(err);
//         } else {
//             setTimeout(() => resolve({ id: 'order_id = 1' }), 5000);
//         }
//     })
//     return promise
// }

// function proceedToPayment() {
//     return new Promise((resolve, reject) => {
//         resolve("Payment is done.")
//     })
// }

// const result = createOrder();
// const data = result.then((data) => {
//         console.log(data);
//         return data
//     })
//     .then(() => {
//         return proceedToPayment();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .then(() => console.log("I am here")) //All then will be resolve if its after the catch, no matter if previous promise return the error

// console.log(data);

//Async Await
// const p = new Promise(((res,reject) => res("hello")));

// async function test() {
//     return p
// }
// console.log(test().then((re) => console.log(re)))
// async function test1(){
//     return "Hello" //Return a promise wrap this value in promise
// }

// With async await 
// await only can be use in async function, You can write this await in front pf promise and it resolves the promise
// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }
// handlePromise();

// With then
// function getData(){
//     p.then((res) => console.log(res))
// }
// getData();

//
const p1 = new Promise((resolve, reject) => {
    return setTimeout(() => resolve("Hello Shivani"), 10000);
})

const p2 = new Promise((resolve, reject) => {
    return setTimeout(() => resolve("Hello khodiyar"), 5000);
})

//JS engin was not wait for promise to be resolved
// const handlePromise1 = () => {
//     p1.then((res) => console.log(res));
//     console.log("Hey I am not waiting")
// }
// handlePromise1()

//JS engin will wait for promise to be resolved
// const handlePromise2 = async () => {
//     console.log("hello")
//     const val = await p1;
//     console.log("I am waiting");
//     console.log(val)

//     //Now js will not wait for 10s, its only wait for the first time
//     const val1 = await p2;
//     console.log("I will not waiting here");
//     console.log(val1)
// }
// handlePromise2()

//After 10000 sec all of the promises will get resolve and print console
// const handlePromise3 = async () => {
//     console.log("hello")
//     const val = await p1;
//     console.log("I am waiting");
//     console.log(val)

//     const val1 = await p2;
//     console.log("I am waiting here also");
//     console.log(val1)
// }
// handlePromise3()

//Reverse the order 5000 and then 10000, 5s will print first and then 10s promise will resolve
// const handlePromise4 = async () => {
//     console.log("hello")
//     const val = await p1;
//     console.log("I am waiting");
//     console.log(val)

//     const val1 = await p2;
//     console.log("I am waiting here also");
//     console.log(val1)
// }
// handlePromise3()


// let promise1 = new Promise((resolve, reject) => {
//     return reject("hello")
// })

// console.log(promise1.then(data => console.log(data)).catch(err => console.log(err, "err")))

// What is HOF higher order function?
// 1. Takes function as an argument
// 2. Return function as its result
// Ex. Map, filter, some, find, reduce, forEach, every

// Composite function :
// Composite function is process of combining multiple function to create new function.
// The composite function applies multiple operation in sequence.

function add(x) {
    return x + 2
}
function multi(x) {
    return x * 3
}

function composite(x, y) {
    return function (num) {
        return x(y(num))
    }
}

const result = composite(add, multi)
console.log(result(4))

// Curring :
// Curring transform a function that takes multiple argument into series of function which takes a single argument.

function demo(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}
console.log(demo(2)(2)(2))

// Memoization : 
// Memoization is technique where function result is catch so that repeated call with the same argument return result faster.
// User for expansive function calls.

function memoization(fn) {
    let cache = {};
    return function (num) {
        if (cache[num]) {
            return cache[num]
        } else {
            let result = fn(num)
            cache[num] = result;
            return result
        }
    }
}

function sum(num){
    console.log("Function calling")
    return num * num
}

const memo = memoization(sum);
console.log(memo(2))
console.log(memo(2))
console.log(memo(3))

// HOC :

let radius = [3, 4, 2, 1]

const CalculateArea = function(radius){
    let result = []
    for(let i=0; i < radius.length; i++){
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result
}
console.log(CalculateArea(radius))

const area = function(radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return Math.PI * 2 * radius
}

const diameter = function(radius){
    return 2 * radius
}
const sortFN = function(radius, area){
    let result = []
    for(let i=0; i < radius.length; i++){
        result.push(area(radius[i]))
    }
    return result
}

console.log(sortFN(radius, area))
console.log(sortFN(radius, circumference))
console.log(sortFN(radius, diameter))

Array.prototype.sortFN = function(area){
    let result = []
    for(let i=0; i < radius.length; i++){
        result.push(area(radius[i]))
    }
    return result
}
console.log(radius.sortFN(area))


