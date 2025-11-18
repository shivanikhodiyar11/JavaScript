// Rest Operator (...)
// 👉 Collects multiple elements into a single array or object.

// Function parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Array destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

// Object destructuring
const { x, ...others } = { x: 1, y: 2, z: 3 };
console.log(x);      // 1
console.log(others); // { y: 2, z: 3 }

// ----------------------------------------------------------------------------------------

// Spread Operator (...)
// 👉 Expands an array or object into individual elements.

// Array spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  
console.log(arr2); // [1, 2, 3, 4]

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a:1, b:2, c:3 }

// Function arguments
function sum(x, y, z) { return x + y + z; }
console.log(sum(...[1, 2, 3])); // 6

// Spread --> Expands elements --> Function calls, array literals, object literals
// Rest -->	Collects elements --> Function parameters, array/object destructuring
