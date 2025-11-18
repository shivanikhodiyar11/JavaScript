let str = "Shivani Khodiyar";
let str2 = "Hello"

console.log("str -->", str)

let a = str.at(-2); // -1 will return last char
let b = str.at(20); // out of rang index will print "Undefined"

console.log(str.at()) // first letter

let c = str.charAt(0)
let d = str.charAt(-1) // Empty string
console.log(str.charAt()) // first letter
console.log(str.charAt(3.6)) // Will convert to 3

let e = str.charAt(str.length - 2)// last char of a string 

let f = str[2]
let h = str[-10] // "Undefined"

let codeAt = str.charCodeAt(-1) // NAN
let codeAt1 = str.charCodeAt() // by default it will 0
let codeAt2 = str.charCodeAt(str.length - 1)

let pointAt = str.codePointAt(-1) // Undefined 
let pointAt1 = str.codePointAt()
let pointAt2 = str.codePointAt(str.length - 1)

// chatCodeAt can return utf-16 value can nor return larger than 0-65536.
// pointCodeAt can return unique code, larger then 65536

let concatStr = str2.concat(" ", str, " ", " "); //If you add empty string length will not add that empty strings
let concatLength = concatStr.length
// Returns new str, Does not modified existing string

let endsWithStr = str.endsWith("Khodiyar", str.length) // case sensitive
let endsWithStr1 = str.endsWith('i', 3) //On 3 position letter is "i"

let fromCharCode_str = String.fromCharCode(72, 69, 76, 76, 79) //Static method of string object

let strIncludes = str.includes("va")
let strIncludes1 = str.includes("va", 3) // Case sensitive

let strIndexOf = str.indexOf("x" , 5) // -1
let strIndexOf1 = str.indexOf("s") // 0
let strIndexOf2 = str.indexOf("yar", 12) //Search this string after given index number or from that number
let strIndexOf3 = str.indexOf("shivani")

let strLastIndexOf = str.lastIndexOf("i", 8); //6
let strLastIndexOf1 = str.lastIndexOf("x") // -1

let strWellFormed = str.isWellFormed(); // 
let strWellFormed1 = "Hello World \uD800".isWellFormed()
//Lone Surrogates : A Lone surrogate is a Unicode surrogate code that is not a part of a valid surrogate pair, used to represent characters in UTF-16 encoding.

let length = str.length 
let length1 = "".length //0
let length2 = " ".length //1

let strPadEnd = str.padEnd(20, "shi") // Number should be grater then the string length
let strPadStart = '30'.padStart(3, "shi")

let num = 30
let strPadStart1 = num.toString().padEnd(7, 0) // This will make length to the given number and add string until that length

let strRepeat = str.repeat(0) // prints nothing
// let strRepeats = str.repeat(-1) // error
let strRepeat1 = str.repeat(3)

let strReplace = str.replace("shi", "you")
// let strReplace1 = str.replace("xy" , xy) // Error not defined : reference error

let replaceAll = str.replaceAll("i", "o")

//Split returns array
let strSplit = str.split("i", 2)
let strSplit1 = str.split(""); //including the space
let strSplit2 = str.split(" ")
let strSplit3 = str.split("i", -1) //Does not consider -1

let strSlice = str.slice(0,9)
let strSlice1 = str.slice(0) //whole string
let strSlice2 = str.slice(-1) //Return last letter
let strSlice3 = str.slice(-2)

let strLower = str.toLowerCase();
let strUpper = str.toUpperCase();

let strLower1 = str.toLocaleLowerCase();
let strUpper1 = str.toLocaleUpperCase();

let str3 = "    shivani    "
let strTrim = str3.trim()
let strTrimEnd = str3.trimEnd()
let strTrimStart = str3.trimStart()

let str4 = 'shini \uD800'
let strToWellFormed = str4.toWellFormed()

let strSubStr = str.substring(2,6)
let strSubStr1 = str.substring(6,2)

let strStartsWith = str.startsWith("Shi")
let strStartsWith1 = str.startsWith("Shi", 0)
let strStartsWith2 = str.startsWith("Shi", -1) //Ignore the -1

console.log("strLower -->", strStartsWith1)





