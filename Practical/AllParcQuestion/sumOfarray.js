function sumOfArray(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
sumOfArray([1, 2, 3]);

function sumOfArray(arr) {
  const reduce = arr.reduce((acc, cur) => (acc = cur + acc), 0);
  console.log(reduce);
}

sumOfArray([-1, 2, -3]);

function rec(arr, sum = 0, i = 0) {
  if (i >= arr.length) return sum;
  sum += arr[i];
  return rec(arr, sum, (i = i + 1));
}

console.log(rec([1, 2, 3, -10]));

// Largest sum subarray (Kadane’s Algorithm)
function maxSubarraySum(arr){
    let cur = 0;
    let max = -Infinity
    let start = 0;
    let end = 0;
    let teamStart = 0
    
    for(let i=0; i<arr.length; i++){
        if(cur + arr[i] > arr[i]){
            cur = cur + arr[i];
        } else{
            cur = arr[i]
            teamStart = i
        }
        if(cur > max){
            max = cur
            start = teamStart;
            end = i
        }
    }
    return {max: max, array: arr.slice(start,end + 1)}
}

console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // 7

function kadane(arr) {
  let curr = 0, maxSoFar = -Infinity;
  for (let num of arr) {
    curr = Math.max(num, curr + num);
    maxSoFar = Math.max(maxSoFar, curr);
  }
  return maxSoFar;
}

//Maximum sum of any 2 consecutive elements
function maxSubarraySum(arr){
    let max = arr[0] + arr[1]
    let pair = [ arr[0],  arr[1]]
    for(let i=0; i<arr.length; i++){
       let  sum = arr[i] + arr[i+1]
        if(max < sum){
            max = sum; 
            pair = [arr[i], arr[i+1]]
        }
    }
    return {max: max, arr:pair}
}
console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // 6

function maxSumKConsecutive(arr, k) {
    if (arr.length < k) return null; // not enough elements

    // Step 1: Get sum of first 'k' elements
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Step 2: Slide the window
    for (let i = k; i < arr.length; i++) {
        // Remove the element going out & add the new element
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example
console.log(maxSumKConsecutive([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
console.log(maxSumKConsecutive([-2, -3, 4, -1, -2, 1, 5, -3], 2)); // 6 (1+5)


function thirdLargest(arr) {
  if (arr.length < 3) {
    throw new Error("Array must have at least 3 numbers");
  }

  // Initialize top three as the lowest possible
  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    // Skip if it's already counted (avoid duplicates)
    if (num === first || num === second || num === third) {
      continue;
    }

    if (num > first) {
      // Shift down
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  if (third === -Infinity) {
    throw new Error("Array must have at least 3 unique numbers");
  }

  return third;
}

// Example usage:
const nums = [12, 5, 8, 1, 22, 22, 9, 17];
console.log("Third Largest:", thirdLargest(nums)); // Output: 12
