// var x = 10;

// function test(num){
//     var res = num * num;
//     return res;
// }

// var a = test(x);
// var b = test(4);

// console.log(a); // If function test(x) returns nothing then UNDEFINED will print.
// console.log(b);
// console.log(x)

// -------------------------------------------------------------------------------------------

// console.log(x); // undefined
// test(); // hello hello

// var x = 10;

// function test() {
//     console.log("hello hello")
// }

// -------------------------------------------------------------------------------------------

// console.log(a); //undefined
// console.log(test); //undefined
// look();


// var a = function() {
//     console.log("hey")
// }

// var test = () => {
//     console.log("I am shivani")
//     return "in"
// }

// function look() {
//      console.log("HEY whats up")
// }

// console.log(a()); // hey and "undefined", because function a returns nothing
// console.log(test()); // I am shivani and "in"
// look() // HEY whats up
// test() // I am shivani

// -------------------------------------------------------------------------------------------

// var x = 1;

// function a(){
//     var x = 10;
//     b();
//     console.log(x); // 10
// }

// function b(){
//     var x = 100;
//     console.log(x);// 100
// }


// b();
// a();
// console.log(x); // 1

// -------------------------------------------------------------------------------------------

// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a(); //Lexical environment

// -------------------------------------------------------------------------------------------

// function a(){
//     b();
//     function b(){
//         var c = 5;
//         console.log(x); //10
//     }
// }

// var x = 10;
// console.log(c); // not defined
// a();

// -------------------------------------------------------------------------------------------

// var a = 10;
// var a = 20;

// let b = 10;
// // let b = 20; Syntax error: 'Identifier B was already declared.

// // const c; Type error: Missing initializer in const declaration 
// const c = 10;

// // c = 20; Type error: Assignment to  const variable

// -------------------------------------------------------------------------------------------

// console.log(a); //undefined
// var a = 10;

// console.log(b); //Reference error: Can not access b before initializer
// let b = 10;

// console.log(c); //Reference error: Can not access c before initializer
// const c = 10;

// Let and Const variable are in temporal dead zone. means js assign a memory to the variable but not in global object, It ll have different memory space.
// Both are hoisted in js.

// -------------------------------------------------------------------------------------------

// {
//     var a = 10;
//     let b = 10;
//     const c = 10;
//     console.log(a, b, c) // 10, 10, 10 --> Const and let are block scoped in js
// }

// console.log(a, b, c) //10, reference error, reference error

// -------------------------------------------------------------------------------------------

{
    // block scop, Group all the js statement into one line. so that we can access where we need to access that in one line
}

if (true) true // this is syntax of if we want to execute more than one line of code than we use block scope {}

// -------------------------------------------------------------------------------------------

// var a = 10;
// {
//     var a = 100; // This a will shadow a = 10 and print 100
//     console.log(a) // 100
// }

//  console.log(a) // 100 --> Shadow a =10 and also modified the value 10 into 100, because this both is in same scope, global scope

// -------------------------------------------------------------------------------------------

// let a = 10;
// {
//     var a = 10; // SyntaxError: Identifier 'a' has already been declared 
// }

// let x = 10;
// function test() {
//   var x = 10;
//   console.log(x); //Var is function scope
// }
// test();
// console.log(x);

// var a = 10;
// {
//     let a = 10;
//     console.log(a); // 10
// }

// let c = 10;
// {
//     let c = 10;
//     console.log(c) // 10
// }

// const b = 10;
// {
//     const b = 20;
//     {
//         const b = 200;
//         console.log(b) // 200
//     }
// }

// -------------------------------------------------------------------------------------------

// function x(){
//     let a = 10;
//     function y(){
//         console.log(a); // 100 --> it references  to the variable a not the value
//     }
//     y(); // 10
//     a = 100;
//     return y;
// }
// x() // a = 10
// var z = x();
// console.log(z);
//.....

// z(); //Function along with its lexical environment forms a closure. When you return function out of the function its just not return a function but it also returns it lexical environment.

// -------------------------------------------------------------------------------------------

// function x(){
//     var a = 10;
//     function z(){
//         function y(){
//             console.log(a);
//         }
//         y();
//     }
//     z();
// };
// x();

// -------------------------------------------------------------------------------------------

// function test() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// test(); // 6,6,6,6,6,6 

// function test() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
// }
// test();

// function test() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// test(); // Let is a block scope, so every time the set time out function call its forms a new closure with the fresh value of a i

// -------------------------------------------------------------------------------------------

// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner
//     }
//     return outer;
// }

// outest()("hello")()
// var test = outest()('hello world');
// test();

// -------------------------------------------------------------------------------------------

// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         // let a = 10;
//         return inner
//     }
//     let a = 12;
//     var c = 50;
//     return outer;
// }

// outest()("hello")()
// var test = outest()('hello world');
// test();

// -------------------------------------------------------------------------------------------

// function counter() {
//     var count = 1;
//     return function incrementCount() {
//         //   count++;
//           return count++
//     }
// }

// var counter1 = counter()
// counter1();
// console.log(counter1()); //2

// var counter2 = counter()()
// console.log(counter2); //1
// console.log(counter()()); //1

// -------------------------------------------------------------------------------------------

// function counter(){
//     var count = 0;
//     return function increment(){
//         count++;
//         console.log(count);
//     }
// }
// var count1 = counter(); 
// count1(); // 1
// count1(); // 2

// var count2 = counter();
// count2(); // 1
// count2(); // 2 

// -------------------------------------------------------------------------------------------

// function Counter(){ // Constructor function 
//     var count = 1;
//     this.incrementCount = function (){
//         count++;
//         console.log(count);
//     }
//     this.decrementCount = function (){
//         count--;
//         console.log(count);
//     }
// }

// let count1 = new Counter(); // Constructor function should declare  with new keyword
// count1.decrementCount();
// count1.incrementCount();
// count1.incrementCount();

// -------------------------------------------------------------------------------------------

// function garbageCollector(){
//     var a = 10, b = 20;
//     return function tets(){
//         console.log(a); // Hold debugger here and try to console b in terminal --> ReferenceError b is.... Smart garbage collection in modern browser
//     }
// }

// var newTest = garbageCollector(); 
// newTest();