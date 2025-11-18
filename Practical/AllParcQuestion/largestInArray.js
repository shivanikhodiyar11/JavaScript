
function largestNumFN(arr){
    let num = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(typeof num === "number" && num < arr[i]){
            num = arr[i]
        } 
    }
    return num
}
console.log(largestNumFN([-1, -50, "shivani", 200]))

const array = [-1, -50, 200]
console.log(Math.max(...array))

function largestNumFN1(arr){
    let larg = arr.reduce((acc, cur) => {
        if(cur > acc){
            acc = cur
        }
        return acc
    }, arr[0])
    return larg
}
console.log(largestNumFN1([-1, -50, "shivani", 200]))

function largestNumFN2(arr){
    let larg = arr[0]
    for(let char of arr){
        if(typeof char === "number" && larg < char) larg = char
    }
    return larg
}
console.log(largestNumFN2([-1, -50, "shivani", 200]))

function largestNumFN3(arr, i = 0, max = arr[0]){
    if(i >= arr.length) return max;
    if(arr[i] > max && typeof arr[i] === "number") max = arr[i];
    return largestNumFN3(arr, i+1, max)
}
console.log(largestNumFN3([-1, -50, "shivani", 200]))

// 1. Find the second largest number
function largestNumFN4(arr){
    let max = -Infinity
    let secMax = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number") continue;
        if(max < arr[i]){
            secMax = max
            max = arr[i];
        } else if(arr[i] > secMax && arr[i] < max){
            secMax = arr[i]
        }
    }
    return secMax
}
console.log("secMax",largestNumFN4([-1, -50, 200, 150]))

// 3. Find kth largest number
function largestNumFN5(arr, k){
    let n = arr.length
    for(let i = 0; i < n; i++){
        for(let j=0; j < n - i; j++){
            if(arr[j] < arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr[k - 1]
}
console.log("KMax",largestNumFN5([-1, -50, 200, 150, 1500], 1))

