// Push
Array.prototype.myPush = function (num) {

    if (this.length === 0) return undefined;

    const newLength = this.length + 1;
    this[this.length] = num;
    return newLength;
}
const pushArray = [1, 2, 3]
console.log("pushArray -->", pushArray, pushArray.myPush(10, 11))

// Pop
Array.prototype.myPop = function () {
    if (this.length === 0) return undefined;

    const lastNum = this[this.length - 1];
    this.length = this.length - 1

    return lastNum;
}

const popArray = [1, 2, 3]
console.log("pushArray -->", popArray , popArray.myPop())

// Shift
Array.prototype.MyShift = function(){
    let ele = this[0];
    for(let i= 1; i < this.length; i++){
        this[i -1] = this[i]
    }
    return ele
}

let array = [8,9,0,10,3]
console.log(array.MyShift(), array)

//Unshift
Array.prototype.myUnshift = function(num){
    this.length = this.length + 1
    for(let i=this.length - 1 ; i>0; i--){
        this[i] = this[i-1]
    }
    this[0] = num
    return this;
}

let arrUnshift = [8,9,0,10,3]
console.log(arrUnshift.myUnshift(), array)

// Slice
Array.prototype.Myslice = function(start = 0, end = this.length) {
    let len = this.length;

    // Handle negatives
    if (start < 0) start = len + start;
    if (end < 0) end = len + end;

    // Clamp within bounds
    if (start < 0) start = 0;
    if (end > len) end = len;

    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(this[i]);
    }
    return arr;
};

// Map
Array.prototype.myMap = function(callBack){

    let result = []
    if(typeof callBack !== 'function') return "This is not a functions"

    for(let i = 0; i < this.length; i++){
        result.push(callBack(this[i], i, this))
    }
    return result
}
const mapArray = [2,3,5]
const result = mapArray.myMap((x) => x * 2 )
console.log("mapArray -->",mapArray, result)

// Filter
Array.prototype.myFilter = function(callBack){
    let result = []
    if(typeof callBack !== 'function') return "This is not a functions"
    for (let i = 0; i < this.length; i++) {
        if(callBack(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}

// Reduce 
Array.prototype.myReduce = function(callBack, initialValue){
    let result = initialValue;
    if(typeof callBack !== 'function') return "This is not a functions";

    for (let i = 0; i < this.length; i++) {
       result = callBack(result, this[i])
    }
    return result;
}