const arr = [1, -2, 3, 50, -6];

function sumValue(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}
console.log(sumValue(arr));

const sum = arr.reduce((acc, curr) => (acc += curr), 0);
console.log(sum);

function maxValue(arr) {
  // let max = -Infinity;
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (max > arr[index]) {
      max = arr[index];
    }
  }
  return max;
}
console.log(maxValue(arr));

const max = arr.reduce((acc, curr) => {
  if (acc > curr) {
    acc = curr;
  }
  return acc;
}, arr[0]);
console.log(max);

const user = [
  { firstName: "Shivani", lastName: "Khodiyar", age: 26 },
  { firstName: "Rudra", lastName: "Khodiyar", age: 20 },
  { firstName: "Ankita", lastName: "Trivedi", age: 26 },
  { firstName: "Jalpa", lastName: "Maheshwari", age: 40 },
];

const firstName = user.map((arr) => arr.firstName + ' ' + arr.lastName)
console.log(firstName)

function ageGrp(user){
    let age = {}
    for (let index = 0; index < user.length; index++) {
        if(age[user[index].age]){
            age[user[index].age] += 1
        } else {
            age[user[index].age] = 1
        }
    }
    return age
}
console.log(ageGrp(user))

const ageGrp1 = user.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] +=1
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {})
console.log(ageGrp1)

const age30 = user.filter((arr) => arr.age < 30).map((arr) => arr.firstName)
console.log(age30)

