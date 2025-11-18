// Swap the number
let a = 10;
let b = 20;

// Using Array Destructuring (ES6+):
// [a, b] = [b, a]

// Using a Temporary Variable:
// let temp = a;
// a = b;
// b = temp;

// Using addition and subtraction
a = a + b; // 30
b = a - b; // 10
a = a - b // 20

console.log("a = ", a, "b = ", b)

// Number of rows for the pattern
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

for (let i = 0; i <= 5; i++) {
    let str = "*"
    console.log(str.repeat(i))
}

for (let i = 5; i >= 0; i--) {
    let str = "";
    for (let j = i; j >= 0; j--) {
        str += "*"
    }
    console.log(str)
}

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += j
    }
    console.log(str)
}

for (let i = 5; i >= 1; i--) {
    let str = "";
    for (let j = i; j >= 1; j--) {
        str += j
    }
    console.log(str)
}

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            str += " "
        } else {
            str += "* "

        }
    }
    console.log(str)
}

for (let i = 1; i <= 5; i++) {
    let str = "";

    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            str += "  "; // spaces for alignment
        } else {
            str += "* ";
        }
    }

    console.log(str);
}

