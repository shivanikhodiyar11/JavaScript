function test() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 2000);

  var x = 2;
  let y = 12;
}

function func2() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000);
  }
}

function test1() {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
}

let x = {},
  y = { name: "Ronny" },
  z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
// console.log(x[y]);

function runFunc() {
  console.log("1" + 1); //11
  console.log("A" - 1); //NaN
  console.log("2" - 1); //1
  console.log(2 + "-2" + "2"); //2-22
  console.log("Hello" - "World" + 78); //NAN
  console.log("Hello" + "78"); //Hello78
}

let a = 0;
let b = false;
// console.log(a == b);
// console.log(a === b);

// var x = 23;
(function () {
  var x = 43;
  (function random() {
    x;

    console.log(x);
    var x = 21;
  })();
})();

let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};

console.log(hero.getPower()); //99

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log("77", getPower()); //undefinded
console.log(getPower.apply(hero2)); // 42

const a2 = function () {
  console.log("a", this); //global

  const b = {
    func1: function () {
      console.log("b", this);
    },
  };

  const c = {
    func2: () => {
      console.log("c", this); //global
    },
  };

  b.func1();
  c.func2();
};

(function (a) {
  return (function () {
    console.log(a);
    a = 23;
    console.log(a);
  })();
})(45);

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//     console.log(b[i]);
//   }, 1000);
// }

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

function mani(ary = [1, 2, 4]) {
  ary.push(5);

  ary = [1];
  return ary;
}

let value = { 2: 2 } - { 2: 2 };

let value2 = [3] * [2];

let a1 = 1;
a1 = a1 + (a1 += 2);

let x2 = [1, 2, 3] + [4, 5, 6];
console.log(x2);

console.log(search([1, 2, 3, 4, 5, 6], 11));

const obj = { props: 10 };
const arr = [obj];
arr[0].props = 20;
console.log(arr, obj);

let x = +"5";
let y = -"5";
console.log(x + y);

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

let x = true === [];
let y = true !== [];

console.log(true === []);
