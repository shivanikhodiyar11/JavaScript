// Array literal method
const arrayLiteral = [1, 2, 3]

// Using the JavaScript Keyword new
// JavaScript has a built-in array constructor new Array().
const arrayList = new Array(1, 2, 3) // [1,2,3]

const points = new Array(40); // Undefined 

// *********************************
console.log(typeof arrayList) // Object
console.log(Array.isArray(arrayList)) // check type of array
console.log(arrayList instanceof Array)
// *********************************

arrayList[0] = 4
console.log("arrayList -->", arrayList) // [4,2,3]

console.log("arrayList to String --> ", arrayList.toString())

console.log("Array length -->", arrayList.length)

console.log("Access last element --> ", arrayList[arrayList.length - 1])

console.log("Access first element --> ", arrayList[0])

for (let i = 0; i < arrayList.length; i++) {
    console.log(arrayList[i])
}

// Adding elements with high indexes can create undefined "holes" in an array:
arrayList[6] = "shivani"
console.log(arrayList, arrayList.length)

// Add element without push at the last index
arrayList[arrayList.length] = 10
arrayList.push(20)
console.log(arrayList)

// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.

// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// ================================================================================================================================================================

const array = [1, 20, "shivani", 4, 5]

const length = array.length
console.log("length -->", length)

const arrayString = array.toString() // Convert into, Separated string
console.log("arrayString -->" , arrayString)

const arrayPush = array.push(3) // Returns length of new array
console.log("arrayPush -->", arrayPush, array) // Modifies the original arrays

const arrayPop = array.pop() // Returns removed element
console.log("arrayPop -->", arrayPop, array) // Modifies the original arrays

const arrayUnshift = array.unshift(10) // Returns length of the array
console.log("arrayUnshift -->", arrayUnshift , array) // Adds element at "0 INDEX"

const arrayShift = array.shift() // Returns removed element
console.log("arrayShift -->", arrayShift, array) // Remove element at "0 Index"

// const arrayDelete = delete a

const arrayAt = array.at[0] // Return element on that index
console.log("arrayAt -->", array.at(-1), array.at(-3), array.at(-20), array.at(3))

const arrayJoin = array.join(" .* ")
console.log("arrayJoin --> ", arrayJoin)

const arrayConcat = array.concat("Khodiyar")
console.log("arrayConcat -->", arrayConcat)

const arrayConcat1 = array.concat([1,2,3])
console.log("arrayConcat1 -->", arrayConcat1)

const arraySplice = array.splice(2,0, "SK") // Return removed element in array
console.log("arraySplice -->", arraySplice, array)

const arraySplice1 = array.splice(0, 1, 100)
console.log("arraySplice1 -->", arraySplice1, array)

const arraySplice2 = array.splice(0 ,1)
console.log("arraySplice2 -->", arraySplice2, array)

const arraySplice3 = array.splice(array.length - 1, 1)
console.log("arraySplice3 -->", arraySplice3, array)

const arraySlice = array.slice(2, 1) // Start >= end returns []
console.log("arraySlice -->", arraySlice, array) // []

const arraySlice1 = array.slice(2, 3)
console.log("arraySlice -->", arraySlice1, array)

const arraySlice2 = array.slice(2)
console.log("arraySlice -->", arraySlice2, array)

const arrayToSplice = array.toSpliced(1,2, "JK")
console.log("arrayToSplice -->",arrayToSplice)

console.log("Original array [1, 20, shivani, 4, 5]", array)

const newArray = [12, [3, 4, [5]]]
const arrayFlat = newArray.flat()
console.log("Flatten array -->", arrayFlat)
const arrayFlatAllLevel = newArray.flat(Infinity)
console.log("Flatten array all level -->", arrayFlatAllLevel)


