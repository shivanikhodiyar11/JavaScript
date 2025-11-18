// 1.Reverse a string
const str = "Shivani";

const reverseStr = str.split("").reverse().join("");
console.log("reverseStr -->", reverseStr);

function reverseStrFN(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    // undefined + "r" => "undefinedr"
    // undefined + "r" causes type coercion, turning undefined into the string "undefined", and then concatenating.
    reverseStr += str[i];
  }
  console.log("reverseStr -->", reverseStr);
  return reverseStr;
}
reverseStrFN("Shivani Khodiyar");

// 2.Is String palindrome or not
const palindromeStr = "DAD";

const isPalindrome =
  palindromeStr.split("").reverse().join("") === palindromeStr;
console.log("isPalindrome -->", isPalindrome);

function isPalindromeFN(str) {
  const toLower = str.toLowerCase();
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += toLower[i];
  }
  console.log("isPalindromeFN -->", reverseStr === str);
  return reverseStr === toLower;
}
isPalindromeFN("DaD");

// 3.Find the largest number in an array in JavaScript.
function largestNumFN(array) {
  let num = -Infinity;
  // let largest = arr[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] > num) {
      num = array[i];
    }
  }
  console.log("largestNumFN -->", num);
  return num;
}
largestNumFN([-1, -50, "shivani", 200]);

const array = [-1, -50, 2, 200, 1000];
console.log("largestNum -->", Math.max(...array));

// 4.How to Remove the first element from an array in JavaScript?
console.log([1, 2, 3].shift());
console.log([1, 2, 3].slice(1));

function removeFirst() {
  const array = [1, 2, 3];
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
    // newArray[i - 1] = array[i]; // direct assignment
  }
  console.log("newArray", newArray);
  return newArray;
}
removeFirst();

// 5.Write a Program to find a sum of an array?
function sumOfArray(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
sumOfArray([1, 2, 3]);

// 6.Write a Program to check if a number is prime or not?
function primeNum(num) {
  let prime = [1];
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      prime.push(i);
    }
  }
  console.log(prime);
  if (prime.length > 2) return false;
  else return true;
}
console.log("result", primeNum(2));

function primeNum1(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 7.Write a Program to print Fibonacci sequence up to n terms?
function fibonacci(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];

  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log("result", fibonacci(2)); // [0, 1]

// If you only want the nth Fibonacci number:
function fibonacci(num) {
  if (num <= 1) return num;
  let a = 0, b = 1;
  for (let i = 2; i <= num; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
}
console.log("result", fibonacci(2)); // 1

// 8.Write a Program to find factorial of a number?
function factorial(number) {
  let factorial = 1;
  if (number === 0 || number === 1) return 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log("factorial -->", factorial(7));

// 9.Recursive Function :
// A recursive function is a function that calls itself to solve a problem.
// Instead of using loops (for, while), recursion breaks a task into smaller versions of the same task, until it reaches a base case — a condition that stops the recursion.
function factorialRec(num) {
  if (num === 0 || num === 1) return 1;

  return num * factorialRec(num - 1);
}
console.log("factorialRecursion -->", factorialRec(3));

// 10.Calculate the Power of a Number in JavaScript?
function powerOfNum(num, power) {
  console.log(num ** power);
  return num ** power;
}
powerOfNum(2, 3);

// 11.Write a Program to print the frequency of elements in an array?
function freqNum(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]] += 1;
    } else {
      obj[array[i]] = 1;
    }
  }
  console.log(obj);
  return obj;
}
freqNum([1, 1, 2, 3, 3, 4]);

// 12.Remove the repeated number from the Array
function removeRepNum(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return removeRepNum;
}
removeRepNum([1, 1, 2, 3, 3, 4]);

function removeRepNum1(arr){
    let obj = []
    for(let i = 0; i <= arr.length - 1 ; i++){
         let found = false
        for(let j =0; j <= obj.length; j++){
            if(obj[j] == arr[i]){
                found = true;
                break;
            }
        }
        if(!found) obj.push(arr[i])
    }
    return obj
}

// 13.Remove duplicate from the array
const withSet = [...new Set([1, 1, 2, 3, 3, 4])];
console.log("withSet -->", withSet);

// 14.Write a Program to count the occurrences of a character in a string in JavaScript?
const num = "GeeksForGeeks".split("e").length - 1;
function countChar(str, char) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      num += 1;
    }
  }
  console.log(num);
  return num;
}
countChar("GeeksForGeeks", "e");

function countChar1(str) {
  let count = {};
  let str1 = str.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    if (count[str1[i]]) {
      count[str1[i]] += 1;
    } else {
      count[str1[i]] = 1;
    }
  }
  console.log(count);
  return count;
}
countChar1("GeeksForGeeksg");

// 15.Write a Program to sort an array in Ascending Order in JavaScript?
function sortArrayA(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array //Buble Sort
}
console.log("sort Array in Ascending -->",sortArrayA([1, 5, 4, 2, 10, -1]))

// 16.write a Program to sort an array in Descending Order in JavaScript?
function sortArrayD(array){
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array //Buble Sort
}
console.log("sort Array in Descending -->",sortArrayD([1, 5, 4, 2, 10, -1]))

// 17.Write a Program to merge two arrays in JavaScript?
function concatArray(arr1, arr2) {
  // return arr1.concat(arr2);
  const newArray = arr1;
  for (let i = 0; i < arr2.length; i++) {
    // newArray.push(arr2[i])
    newArray[newArray.length] = arr2[i];
  }
  return newArray;
}
console.log("concat -->", concatArray([1, 2], [3, 4, 5]));

// 18.Find the Intersection of Two Arrays in JavaScript
const arr1 = [1, 2, 3, 4, 10]
const arr2 = [3, 4, 5, 6, 7,9,10]

function withIncludes(arr, arr1){
    let result = [];
    for(let i=0; i < array.length; i++){
        if(arr1.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(withIncludes(arr1,arr2 ))

function withoutIncludes(arr, arr1){
    let result = [];
    for(let i=0; i < arr.length; i++){
       for(let j=0; j < arr1.length; j++){
           if(arr[i] === arr1[j]){
               result[result.length] = arr[i]
           }
       }
    }
    console.log(...new Set(result))
    return [...new Set(result)]
}
console.log(withoutIncludes(array,arr2 ))

function intersection(arr1, arr2) {
  let result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Avoid duplicates in result
        let alreadyAdded = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          result.push(arr1[i]);
        }
      }
    }
  }
  return result;
}

// Example:
const a3 = [1, 2, 3, 4, 5];
const b3 = [3, 4, 5, 6, 7];
console.log(intersection(a3, b3)); // [3, 4, 5]

// 19.Check if a Number is Even or Odd in JavaScript?
function evenOdd(num) {
  let numType = "";
  if (num % 2 === 0) {
    return (numType = "even");
  } else {
    return (numType = "odd");
  }
}
console.log(evenOdd(9));

// 20.Write a Program to find the minimum value in an array in JavaScript?
console.log(Math.min(...[1, 4, 5, -1, 1000]));
function minValue(array) {
  let value = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < value) {
      value = array[i];
    }
  }
  return value;
}
console.log("minValue -->", minValue([1, 4, 60, -1]));

// 21.Check if a String Contains Another String in JavaScript?
let str1 = "Hello, welcome to JavaScript!";
console.log(str.includes("welcome")); // true
console.log(str.includes("Python"));  // false

function containsSubstring(str, subStr) {
    let n = str.length;
    let m = subStr.length;

    for (let i = 0; i <= n - m; i++) {
      let j;
        for ( j = 0; j < m; j++) {
            if (str[i + j] !== subStr[j]) {
                break; // mismatch
            }
        }
        if (j === m) {
            return true; // found substring
        }
    }
    return false; // not found
}
console.log(containsSubstring("shivii", "vi")); // true
console.log(containsSubstring("shivii", "iv")); // true
console.log(containsSubstring("shivii", "vv")); // false

// 22.Capitalize the First Letter of Each Word in a Sentence in JavaScript?
function capitalizeWords(str) {
  const result = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return result;
}
console.log(capitalizeWords("hello geeks welcome to javascript world"));

function CapitalizeStr(str) {
  let result = str.split(" ");

  for (let i = 0; i < result.length; i++) {
    let word = result[i];
    result[i] = word[0].toUpperCase() + word.slice(1);
  }
  return result.join(" ");
}
console.log("CapitalizeStr -->", CapitalizeStr("hello geeks"));

// 23.Convert an Array of Strings to Uppercase in JavaScript?
function upperCaseArray(array) {
  let newArr = [];
  for (value of array) {
    // newArr.push(value.toUpperCase());
    newArr[newArr.length] = value.toUpperCase();
  }
  return newArr;
}
console.log("upperCaseArray -->", upperCaseArray(["g", "f", "g"]));

// 24.Write a Program to reverse an array in JavaScript?
function reverseArray(array) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr[newArr.length] = array[i];
  }
  return newArr;
}
console.log("reverseArray -->", reverseArray([5, 6, 7, 8]));

// 25.Get the last element of an array in JavaScript?
const array1 = [1, 3, 6];
console.log(...array1.slice(array1.length - 1));
console.log(array1[array1.length - 1]);

// 26.Remove falsy Values from an array in JavaScript?
const falsyValue = [0, false, null, undefined, "", NaN]

const withFilter = falsyValue.filter(Boolean);
const withFilter1 = falsyValue.filter(value => value)
console.log(withFilter1, withFilter)

function removeFalsy(array){
  let result = []
  for (let i = 0; i < array.length; i++) {
    if(array[i]){
      result.push(array[i])
    }    
  }
  return result
}
console.log(removeFalsy([0, 1, false, 2, '', 3, null, 'hello', undefined, NaN]));

// 27.Create an object and print the property?

// 28.Convert a string to an array of words in JavaScript?

// 29.Check if Two Strings are Anagrams or not in JavaScript?
function isAnagram(str, str2){
    let count = {};
    for(let key of str){
        count[key] = (count[key] || 0) + 1;
    }
    for(let key of str2){
        if(count[key]){
            count[key] = count[key] - 1
        } else {
            return false
        }
    }
    return true
}
function isAnagram(str, str2){
    let n = str.split('').sort().join('')
    let m = str2.split('').sort().join('')
    return n === m
}
// Example
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("hello", "world")); // false

function duplicate(arr) {
  let newArr = [];
  let rep = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    } else {
      rep.push(arr[i]);
    }
  }
  console.log("newArr -->", newArr, "rep -->", rep);
}
duplicate([1, 2, 3, 6, 3, 6, 1]);

// Guess the O/P
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

// Implement a function that returns an updated array with r right rotations on an array of integers.
// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
// return [4,5,7,2,3]

function rotation(arr, n){
    for(let i=0; i<3; i++){
        let num = arr.pop()
        arr.unshift(num)
    }
    return arr
}

function rotation(arr, n){
    for(let i=0; i<3; i++){
        let num = arr[arr.length - 1]
        arr.length = arr.length - 1 
        arr.splice(0,0, num)
    }
    return arr
}
console.log(rotation([2,3,4,5,7], 3))

function rightRotate(arr, r) {
  let n = arr.length;
  r = r % n; // handle cases when r > n
  for (let k = 0; k < r; k++) {
    // store last element
    let last = arr[n - 1];
    // shift all elements one step to the right
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    // place last element at the beginning
    arr[0] = last;
  }
  return arr;
}
console.log(rightRotate([2, 3, 4, 5, 7], 3));
// Output: [4, 5, 7, 2, 3]


// Guess the O/P
(function (a) {
  return (function () {
    console.log(a);
    a = 23;
    console.log(a);
  })();
})(45);

let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};

let getPower = hero.getPower();
let newPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(newPower(), getPower);
console.log(newPower.apply(hero2));

// Guess the O/P
var x = 23;

(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x); // NAN
    var x = 21;
  })();
})();

function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12;
}
func1();

// Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.
function func2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}
func2();
