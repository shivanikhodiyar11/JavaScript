// ----> Hoisting In JS
// Hoisting in Js is behavior, In which variable and function moves to the top of there scope in compilation time. 
// You can access these before you actually initialize the value.
// But the value of var is "undefined"
// Once code gets executed or reached where the value is assign then you will get the original value
// You can also assign a value to it

// Variable hoisting
console.log(varHoisting)
varHoisting = 0;
console.log(varHoisting)
var varHoisting = 10;
console.log(varHoisting)

// Function hoisting
console.log(fnHoisting);
fnHoisting();
function fnHoisting() {
    console.log("Hey")
}

// If you create same function with same name the last function's initialization will get store in memory
function fnHoisting() {
    console.log("Hey I over ride the 1st fnHoisting function")
}

// Let and const Hoisting
// console.log(letHoisting, constHoisting)
let letHoisting = 10;
const constHoisting = 20

// Function Expression
// fnVarHoisting();    
const fnVarHoisting = () => {
    console.log("Hey")
}

// ===============================================================================================================================================================================

// ----> Temporal dead zone
// Let and const are Hoisted in js, But this are in TDZ for the time code execution not reached to the line where its actually get initialize.
// You can not assign a value or access the value - Reference error

// The Temporal Dead Zone (TDZ) in JavaScript refers to the period during which a variable declared with let or const exists within its scope but cannot be accessed or assigned a value before its declaration and initialization. 
// Attempting to access such a variable within the TDZ will result in a ReferenceError

// console.log(letHoisting, constHoisting)
// letTDZ = 0; // Cannot access 'letTDZ' before initialization
let letTDZ = 10;
const constTDZ = 20

// ===============================================================================================================================================================================

// Variable in js

// Var :
// Var declaration is function-scope or global scope.
// Var declaration is hoisted to the top of their scope with undefined value.
// Var allows RE-Declaration & RE-Assignment within the same scope.

console.log("varHoisted --> ", varHoisted) // Undefined
varHoisted = 0
console.log("varHoisted --> ", varHoisted) // 0
var varHoisted = 10;
console.log("varHoisted --> ", varHoisted) // 10
var varHoisted = 20;
console.log("varHoisted --> ", varHoisted) // 20
varHoisted = 30
console.log("varHoisted --> ", varHoisted) // 30

{
    console.log("varHoisted --> ", varHoisted) // 30
    var varHoisted = 40;
    console.log("varHoisted --> ", varHoisted) // 40
    varHoisted = 50;
    console.log("varHoisted --> ", varHoisted) // 50
}
console.log("varHoisted --> ", varHoisted) // 50

// In functional Scope :
function testVar() {
    console.log("varHoisted --> ", varHoisted) // 50
    varHoisted = 60; // ***IMP
    console.log("varHoisted --> ", varHoisted) // 60
    var varInFn = 10;
    console.log("varInFn -->", varInFn) // 10
    varInFn = 20;
    console.log("varInFn -->", varInFn) // 20
}
testVar();
// console.log("varInFn -->", varInFn) // Error

console.log("varHoisted --> ", varHoisted) // 60 // ***IMP

// LET IN JS : 
// Let is blocked scope.
// Let is hoisted in Js, But value of let is not initialize before its declaration executed.
// They are in a "Temporal Dead Zone" (TDZ) until their declaration line is executed.
// Re-assignment can be done, but Re-Declaration can not be done

// console.log("letVar --> ", letVar) // TDZ
let letVar = 10;
console.log("letVar --> ", letVar) // 10

// let letVar = 20; // SyntaxError
letVar = 30;
console.log("letVar --> ", letVar) // 30

let letInBlock = 20;
{
    letVar = 50 // ***IMP
    console.log("letVar --> ", letVar) // 50

    // letInBlock = 100 Cannot access 'letInBlock' before initialization
    let letInBlock = 10; 
    console.log("letInBlock -->", letInBlock) // 10
    let a = 10;
}
console.log("letInBlock -->", letInBlock) // 20
console.log("letVar --> ", letVar) // 50
// console.log("letVar --> ", a) // Error

let test = 40
function testLet() {
    let test = 30
    console.log("letInBlock Fn -->", letInBlock) // 20
}
testLet()
console.log(test) // 40

// CONST IN JS :
// Cont declaration are block scope.
// Const is hoisted but in TDZ.
// Re-assignment and Re-declaration both are not allowed
// Value should be constant through out the execution
// However, for objects or arrays declared with const, their properties can still be modified, though the variable itself cannot be reassigned to a different object or array.

const constVar = 10;
{
    const constVar = 20;
    console.log("constVar -->", constVar) // 20
}

console.log("constVar -->", constVar) // 10

// ===============================================================================================================================================================================

// CLOSURE IN JS :
// A Function bundled together with it local scope and parents lexical environment forms a closure.
// Means inner function can access variable & parameter declare in outer function.

// LEXICAL SCOPING :
// The scope of variable is determine by its position in the source code at a time of compilation, Not at a time of execution.
// Inner function can access variable defined in outer function even if outer function gets executed.
// It "remember" environment where it created

// A lexical environment in JS is the context where variables and functions are declared, along with a reference to its outer environment, enabling the scope chain.

function closure() {
    let count = 10;

    return function incrementCount() {
        return ++count
    }
}

let count = closure();
console.log(count())
console.log(count())

let count1 = closure();
console.log(count1());
console.log(count1());

// ===============================================================================================================================================================================

//Callback hell
// When multiple async operation connected with the callback it will create a callback hell

// createOrder(cart, () => {
//     makePayment(orderId, () => {
//         showPayment(paymentInfo, () => {
//             orderSummery()
//         })
//     })
// })

// ===============================================================================================================================================================================

// Promises :
// Promise is an js object with represent the eventual completion/failures of async operations.

const promise = new Promise((resolve, reject) => {
    return resolve("It is get resolved")
})

promise.then((res) => console.log(res))

// What is promise chaining in js?
// Promise chaining in js is a technique to handle multiple sequence of async operations. In readable and structured manner.
// It will linking promises to the .then, each .then get resolved and pass the value to the another promise to get resolve and so on.
// It only resolve if previous promise get resolve.
// It is resolve the callback hall issue.

// createOrder.then((res) => { return makePayment(res) })
//     .then((res) => { return showPayment(res) })
//     .then((res) => orderDetails())
//     .catch((err) => console.log(err))

// ===============================================================================================================================================================================

// Explain the promise methods :
// 1. promise.all : All resolve / first rejected
// 2. promise.allSettled : All settled 
// 3. promise.race : First settled promise
// 4. promise.any : 1st resolve, Aggregated error
// Read promise.js file

// Promise.any([p1,p2,p3]).then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error(err)
//         console.log(err.errors)
//     })
 
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

// ===============================================================================================================================================================================

// What is async and await in js?
// async/await are keywords in js, Which is use to handle asynchronous operations in more readable manner.
// async key world can place before any asynchronous function.
// async function can return promise, If function returns value is not explicitly promise, js implicitly wraps that it in resolve promise.

// Await key word only use in async function.
// If any expression returns promise we can place await before that.
// Function will pause for the time being until promise gets settled.
// If promise get resolve it will be value of the promise.
// If it gets rejected we need to handle that with try and catch.

// ===============================================================================================================================================================================

// This Keyword in js

// This keyword in js refers to the object in which function is executed or called.
// This object is dynamic and depends on the context in which function is invoke.

console.log(this) // Global obj (Window)

// function test(){
//     console.log(this) // Non strict : window  Strict : undefined
// };
// test()

// this substitution : 
// In non strict mode if this value is null/undefined js will convert that value with in global object

// Arrow function don't have their own this, value of this in arrow function is refers to the enclosing lexical environment.

// With the this we can access the methods or property of the object

// ===============================================================================================================================================================================

// In JavaScript, call, apply, and bind are methods used to control the execution context of functions, specifically the value of this inside the function, and how arguments are passed. 

// call():
// Invokes a function immediately.
// Allows you to explicitly set the this value for the function's execution.
// Accepts arguments individually, comma-separated.
// Syntax: function.call(thisArg, arg1, arg2, ...)

// apply():
// Invokes a function immediately.
// Allows you to explicitly set the this value for the function's execution.
// Accepts arguments as an array or an array-like object. This is useful when the number of arguments is not known in advance.
// Syntax: function.apply(thisArg, [argsArray])

// bind():
// Does not invoke the function immediately.
// Returns a new function with the this value permanently bound to the specified object.
// Can also pre-set some arguments for the new function.
// The returned function can be invoked later.
// Syntax: const newFunction = function.bind(thisArg, arg1, arg2, ...)

// Key Differences:
// Invocation:
// call() and apply() execute the function immediately, while bind() returns a new function that can be executed later.
// Argument Passing:
// call() takes arguments individually, apply() takes arguments as an array, and bind() can pre-set arguments that will be used when the new function is called.
// Return Value:
// call() and apply() return the result of the function execution, while bind() returns a new function. 

const obj = {
    firstName: "shivani",
    lastName: "khodiyar",
    printName: function (city, state) {
        console.log("My name is", this.firstName, this.lastName )
        console.log("I am from", city, state )

    }
}
const obj2 = {
    firstName: "Rudra",
    lastName: "khodiyar",
}
obj.printName("Anjat" , "Kutch");
obj.printName.call(obj2, "Ahemdabad", "Gujrat");

obj.printName.apply(obj2, ["Califonia", "USA"])
const fn = obj.printName.bind(obj2, "Ahemdabad", "Gujrat");
fn();

// ===============================================================================================================================================================================

// Event Propagation :
// Event Propagation in js is the mechanism by which event can travel through the dom tree when any event accrue, Like button click, key press etc.
// It determines which element receive and respond to the event.

// Event Bubbling : Target element to the root element (Bottom to top)
// addEventListener(event, handler, false)

// Event capturing : Root to target element (top to bottom)
// addEventListener(event, handler, true)

// e.stopPropagation :
//  This method prevents the event from continuing to propagate further up or down the DOM tree

// Target phase – the event reached the target element.

// event.stopImmediatePropagation(): 
// This method not only stops the event propagation but also prevents any other event handlers attached to the same element from executing.

// e.preventDefault :
// This is a method in js to stop the default behavior associated with a specific event from occurring.

// When certain events, such as clicking a link, submitting a form, or checking a checkbox, occur, browsers have predefined default actions. 
// event.preventDefault() allows developers to override these default actions and implement custom behavior.

// ===============================================================================================================================================================================

// Currying in js :
// Currying in js is used to transform complex function calls into more manageable and smaller steps.
// It transfers multiple argument function into sequence of function which accepts single argument 

function currying(a){
    return function(b) {
        console.log(a + b)
        return a + b;
    }
}
currying(2)(2)

const currying1 = (a) => (b) => a + b
console.log(sum(2)(2))

function sum(a) {
  return function(b) {
    if (b !== undefined) {
      return sum(a + b);  // keep chaining
    }
    return a; // return final result when no argument
  };
}

console.log(sum(2)(3)(4)(5)()); // 14
console.log(sum(10)(20)())

function curry(fn, initial) {
  function inner(value) {
    if (value !== undefined) {
      return curry(fn, fn(initial, value));  // keep applying the function
    }
    return initial; // stop when no arg passed
  }
  return inner;
}

// Sum
const sum = curry((a, b) => a + b, 0);
console.log(sum(2)(3)(4)(5)()); // 14

// Multiplication
const multiply = curry((a, b) => a * b, 1);
console.log(multiply(2)(3)(4)()); // 24

// Subtraction
const subtract = curry((a, b) => a - b, 100);
console.log(subtract(20)(10)(5)()); // 65

// Division
const divide = curry((a, b) => a / b, 100);
console.log(divide(2)(5)()); // 10
// ===============================================================================================================================================================================
