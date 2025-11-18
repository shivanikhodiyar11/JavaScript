// Reverse only words in a sentence ("Hello World" → "olleH dlroW")

const rev = "Shivani Khodiyar".split("").reverse().join('')
console.log(rev)

function reverseStrFN(str){
    let rev = "";
    for(let i =str.length - 1; i >=0; i--){
        rev += str[i]
    }
    return rev
}
console.log(reverseStrFN("Shivani Khodiyar"))

function reverseStrFN1(str){
    let rev = "";
    for (let char of str){
        rev = char + rev
    }
    return rev
}
console.log(reverseStrFN1("Shivani Khodiyar"))

function reverseStrFN2(str){
    let rev = "";
    for(let i =0; i < str.length; i++){
        rev = str[i] + rev
    }
    return rev
}
console.log(reverseStrFN2("Shivani Khodiyar"))

function reverseStrFN3(str){
    let rev = str.split('').reduce((acc, cur) => acc = cur + acc , "")
    return rev
}
console.log(reverseStrFN3("Shivani Khodiyar"))

function reverseStrFN5(str){
    if(str === "") return ""
    return reverseStrFN5(str.slice(1)) + str[0]
}
console.log(reverseStrFN5("Shivani Khodiyar"))

function reverseStrFN6(str){
    let stack = []
    for(let char of str) stack.push(char)
    
    let rev = ""
    // for(let char of stack) rev = char + rev 
    while(stack.length) rev += stack.pop()
    return rev
}
console.log(reverseStrFN6("Shivani Khodiyar"))