"use strict";
// What is value of THIS in global space?
// It is a global object, depends on where you are running(Js run time) you piece of code. It can be a window, global(node).
console.log(this);

function x() {
  console.log(this); // 1. In strict mode - undefined 2. Non strict mode - window obj
}

// Value of this is also depends on How the function is called.
x(); // Undefined
window.x(); // Window object

// this in non strict mode (this substitution)
// If value of this is null/undefined then this keyword's value will be replaced with the global object

// What is a value of this keyword in function?
// In function this value will be "UNDEFINED", but there is a thing called this substitution which
// replace undefine/null value of this with global obj if you are not using strict mode.

// This inside a object's method
const obj = {
  a: 10,
  x: function () {
    let a = 20;
    console.log(this); // obj object
    console.log(this.a); // 10
    console.log(a); // 20 --> comment let a = 20 : error
    // If console.log(a) and a is not define in function then it will through the error
  },
};
obj.x();

// What is difference between method and function?
// When you define a function inside of an object it call a method

// This inside a arrow function
// It has not binding of this
// Arrow function have not there own this, It will take there lexical environment's this value where they invoke
const obj1 = {
  a: 10,
  x: () => {
    console.log(this); //Window object : Its is lexically present in the global space
  },
};
obj1.x();

// Function has a its own this depend on mode
// Window object : Its is lexically present in the global space. 1)strict : undefined 2)non-strict : window
function test() {
  let a = 30;
  let b = 40;
  let obj1 = {
    a: 10,
    x: () => {
      console.log("this -->", this); // 1)strict : undefined 2)non-strict : window
    },
    y: function () {
      console.log("this -->", this); // obj1
    },
  };
  obj1.x();
  obj1.y();
}
test();

// The arrow function has not there own this, thats why it will print window
// Arrow function doesn't provide their own this binding(it retains the this value of the enclosing lexical content)
const handleFunction = () => {
  let a = 30;
  let b = 40;
  let obj1 = {
    a: 10,
    x: () => {
      console.log("this -->", this); // Window obj
    },
  };
  obj1.x();
};
handleFunction();

const obj2 = {
  a: 10,
  b: function () {
    const c = () => {
      console.log(this); // Enclosing lexical environment of function which is obj2
    };
    c();
  },
};
obj2.b();

// This inside DOM element : Reference to the HtmlElement
// this.tagName
// This will be the reference of the html element where we print this

let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};

let getPower = hero.getPower();
let newPower = hero.getPower; // This copies the function, but not the this context.
let newPower1 = hero.getPower.bind(hero); // 99

let hero2 = { powerLevel: 42 };
console.log(newPower()); // Undefined window.newPower() = newPower();
console.log(getPower); // 99
console.log(newPower1); // 99
console.log(getPower.apply(hero2)); // 42

// Closures remember variables in the lexical environment, not this.
// this is resolved based on how a function is called.
// You need .bind(obj) to fix this permanently.
// Calling a method without its object context (e.g., let fn = obj.method; fn();) loses the this binding.

 const a = function(){
    console.log(this); // window
  
    const b = {
      func1: function(){
        console.log(this); // b
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this); // window
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();

//=============

 const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name); // Vivek
      (function(){
        console.log(this.name); // Undefined
        console.log(self.name); // Vivek
      })();
    }
  }
  b.f();

var a1 = 1;
let b2 = 2;

console.log(window.a1); // ✅ 1
console.log(window.b2); // ❌ undefined