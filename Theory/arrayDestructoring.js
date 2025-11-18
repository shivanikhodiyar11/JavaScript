// What is Array Destructuring?
// It’s a shorthand way to extract values from arrays and assign them to variables.

// ✅ Basic Example
const numbers = [10, 20, 30];
const [a1, b1, c1] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// 🔹 Skipping Items
const arr1 = [1, 2, 3, 4];
const [first1, , third] = arr;

console.log(first); // 1
console.log(third); // 3


// 👉 Skipped 2 by leaving a blank space.

// 🔹 Default Values
const arr2 = [5];
const [x, y = 10] = arr;

console.log(x); // 5
console.log(y); // 10 (default used)

// 🔹 Rest with Destructuring
const arr3 = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;

console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// 👉 Here ...rest collects the remaining items.

// 🔹 Swapping Variables (handy trick)
let a3 = 1, b3 = 2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// 🔹 Nested Destructuring
const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
