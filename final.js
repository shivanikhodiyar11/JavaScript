// String Reverse

const { func } = require("joi");

function RevereString(str = "shivani") {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

function withWhile(str = "shivani") {
  let rev = "";
  let i = str.length - 1;
  while (i >= 0) {
    rev += str[i];
    i--;
  }
  return rev;
}

const rev = "shivani".split("").reverse().join("");

// String Palindrom
function palindrom(str = "shivani") {
  const lowerSTR = str.toLowerCase();
  let rev = "";
  for (let i = lowerSTR.length - 1; i >= 0; i--) {
    rev += lowerSTR[i];
  }
  if (rev === lowerSTR) return true;
  return false;
}

// Anagram String
function Anagram(str1 = "Army", str2 = "shii") {
  if (str1.length !== str2.length) return false;

  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();

  for (let i = 0; i <= s1.length - 1; i++) {
    if (!s2.includes(s1[i]) && !s2.indexOf(s1[i]) !== -1) return false;
  }
  return true;
}

function AnagramWithMethods(str1 = "Army", str2 = "shia") {
  const s1 = str1.toLowerCase().split("").sort().join("");
  const s2 = str2.toLowerCase().split("").sort().join("");
  if (s1 === s2) return true;
  return false;
}

function DisplyString() {
  for (let i = 0; i <= 100; i++) {
    let a = i % 3 === 0;
    let b = i % 5 === 0;
    console.log(a ? (b ? "shivani khodiyar" : "shivani") : b ? "khodiyar" : i);
  }
}

function MakeCounter(num = 5) {
  return function () {
    return (num += 1);
  };
}
const data = MakeCounter();

function sumOfarray(arr = [1, 2, 3, 4, 5]) {
  let sum = arr[0];
  let total = 0;
  for (let i = 1; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  arr.forEach((item) => (total += item));
  return [sum, total];
}

function MaxNumInArr(arr = [100, 2, -3, 4, -500]) {
  let max = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

// Array.prototype.add = function (ele) {
//   this[this.length] = ele;
//   return this;
// };

function RemoveDuplicatEle(arr = [100, 2, 2, 4, -500]) {
  let newArr = [];
  let replitedNum = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr.indexOf(arr[i]) == i) newArr.add(arr[i]);

    if (arr.indexOf(arr[i]) !== i) replitedNum.add(arr[i]);
  }
  return [newArr, replitedNum];
}

// Array.prototype.addAtFirst = function (ele) {
//   let newarr = this;
//   newarr = [ele].concat(this);
//   return newarr;
// };
// Array.prototype.RemoveLast = function () {
//   let removedEle = this[this.length - 1];
//   this.length = this.length - 1;
//   return removedEle;
// };

function RotatedArr(n = 3, arr = [1, 2, 3, 4, 5]) {
  for (let i = 1; i <= n; i++) {
    arr.unshift(arr.RemoveLast());
  }
  return arr;
}

function findVowels(str = "shivani") {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let item of str) {
    if (vowels.includes(item)) {
      count += 1;
    }
  }
  return count;
}

function memorisedValue() {
  let cache = {};

  return function (num) {
    if (num in cache) {
      return cache[num];
    } else {
      cache[num] = num + 256;
      return cache[num];
    }
  };
}
const result = memorisedValue();

function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    if (typeof obj[i] == "object" && obj[i] != null)
      clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}
const obj = [
  { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
  { name: "BMW", models: ["320", "X3", "X5"] },
  { name: "Fiat", models: ["500", "Panda"] },
];

function maxSubArray(arr = [1, 2, 3, -2, 5]) {
  let current = arr[0];
  let max = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    current = Math.max(arr[i], current + arr[i]);
    max = Math.max(current, max);
  }
  return max;
}

function missing(arr = [6, 1, 2, 8, 3, 4, 7, 10, 5]) {
  let sortedArr = arr.sort((a, b) => a - b);
  let ele = 0;
  for (let i = 0; i <= sortedArr.length - 1; i++) {
    if (sortedArr[i] !== i + 1) ele = i + 1;
  }
  return ele;
}

function findSmall(ary = [7, 10, 4, 20, 15], N = 4) {
  let sorted = ary.sort((a, b) => a - b);
  return sorted[N - 1];
}

async function A() {
  return "Hello";
}

async function B() {
  return "Hello world";
}

const result1 = Promise.all([A(), B()]);
result1.then((res) => {
  if (res) {
    (async function () {
      return "here";
    })();
  }
});

Array.prototype.MyFilter = function (fn) {
  let arr = [];
  this.forEach((element, INX) => {
    if (fn(element, INX)) {
      arr.push(element);
    }
  });
  return arr;
};
// const result12 = [2, 3, 2, 5, 6, 7].MyFilter((item, index) => item > 5);
// const result2 = [2, 3, 2, 5, 6, 7].MyFilter(
//   (item, index) => ary.indexOf(item) === index
// );

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function fibonacciSequence(num = 5) {
  if (num === 0) return [];
  if (num === 1) return [0, 1];

  let result = [0, 1];

  for (let i = 1; i <= num; i++) {
    let lengthArr = result.length;
    let num = result[lengthArr - 1] + result[lengthArr - 2];
    result.push(num);
  }
  return result;
}

function debounce(fn, delay) {
  let timmer;
  return function () {
    clearTimeout(timmer);

    timmer = setTimeout(fn, delay);
  };
}

function CheckTax(salary = 8000) {
  let tax = 0;
  if (salary <= 10000) {
    return tax;
  }
  salary -= 10000;
  if (salary <= 20000) {
    console.log(salary);
    tax += (salary * 10) / 100;

    return tax;
  } else {
    salary - 20000;
    tax += (20000 * 10) / 100;
  }

  if (salary <= 30000) {
    tax += (salary * 20) / 100;
    return tax;
  } else {
    salary - 30000;
    tax += (30000 * 20) / 100;
  }

  return tax;
}

function per(num, amount) {
  return (num * amount) / 100;
}

function search(arr = [1, 2, 3, 4, 5, 6], n = 11) {}
