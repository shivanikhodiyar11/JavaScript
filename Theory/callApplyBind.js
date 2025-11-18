// Value of this can be modified with the call, Apply and bind method
const student1 = {
    a: "Shivani",
    printName: function () {
        console.log(this.a)
    }
}

const student2 = {
    a: "Khodiyar"
}

student1.printName(); // Shivani

// Using call method we can do a function borrowing
// We have to invoke a function directly
student1.printName.call(student2) // Khodiyar

// In normal way we defind our method outside of the obj
let testFunction = function (homeTown, homeTown2) {
    console.log("testFunction -->", this.a + " from " + homeTown + " " + homeTown2)
}
testFunction.call(student1, "Anjar", "UK") // Shivani from Anjar UK

const val = testFunction.call(student1, "Anjar", "UK")
console.log("Call method returns", val) // Undefined

//Only difference in call and apply is the way we pass arguments
testFunction.apply(student2, ['Anjar', ' UK']) // Khodiyar from Anjar  UK

const val1 = testFunction.apply(student2, ['Anjar', ' UK'])
console.log("Apply method returns --> ", val1) // Undefined

// We can not call bind method directly
// It will return us a function and we can call it letter
// It will binds the method and return a function
let bindFunction = testFunction.bind(student1, "Anjar", "UK")
console.log("bindFunction -->", bindFunction)
bindFunction()

let multiply = function (x, y) {
    // console.log(x * y)
    return x * y
}

let bindMultiply = multiply.bind(this, 2)
console.log(bindMultiply(5))

// Will ignore the 6 and print 2 * 5 = 10
let bindMultiply1 = multiply.bind(this, 2, 5)
console.log(bindMultiply(6)) // 10

function sayHi() {
  return this.name;
}
const user1 = { name: "Alice" };
const user2 = { name: "Bob" };
const hiAlice = sayHi.bind(user1).bind(user2);
console.log(hiAlice());

// bind works only the first time.
// Once a function is bound, rebinding has no effect.
// Output: "Alice"

// -----------------------------------------------------------------------------------

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


// ----------------------
// Polyfill for call()
// ----------------------
Function.prototype.myCall = function (context = {}, ...args) {
  if (context === null || context === undefined) {
    context = globalThis; // window in browser / global in Node
  }

  const uniqueKey = Symbol(); // unique property to avoid overwriting
  context[uniqueKey] = this;  // 'this' refers to the function being called

  const result = context[uniqueKey](...args); // invoke function with spread args
  delete context[uniqueKey]; // clean up

  return result; // return function result
};

// ----------------------
// Polyfill for apply()
// ----------------------
Function.prototype.myApply = function (context = {}, args = []) {
  if (context === null || context === undefined) {
    context = globalThis;
  }

  if (!Array.isArray(args)) {
    throw new TypeError("Arguments must be an array");
  }

  const uniqueKey = Symbol();
  context[uniqueKey] = this;

  const result = context[uniqueKey](...args);
  delete context[uniqueKey];

  return result;
};

// ----------------------
// Polyfill for bind()
// ----------------------
Function.prototype.myBind = function (context = {}, ...args) {
  const fn = this; // store reference to original function

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
