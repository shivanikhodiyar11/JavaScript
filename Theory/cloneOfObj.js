// structuredClone (modern, built-in)
const obj = { a: 1, b: { c: 2 }, d: new Date() };
const copy = structuredClone(obj);

console.log(copy); // { a:1, b:{c:2}, d: Date(...) }


// ✅ Handles nested objects, arrays, Dates, Maps, Sets.
// ❌ Not supported in some older browsers.

// ----------------------------------------------------------------------------------------

// Lodash cloneDeep (popular library)
import _ from "lodash";

const obj1 = { a: 1, b: { c: 2 } };
const copy1 = _.cloneDeep(obj);

console.log(copy1); // deep copy

// ✅ Very reliable, handles most edge cases.

// ----------------------------------------------------------------------------------------

// Manual Recursion

function deepClone(obj) {
  // Handle null or non-object types (string, number, etc.)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  // Handle objects
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]); // recursive call
    }
  }

  return clonedObj;
}

// ----------------------------------------------------------------------------------------

// Using Object.assign or Spread (⚠️ Only Shallow Copy)
const copy2 = { ...obj };
const copy3 = Object.assign({}, obj);


// ✅ Fast and simple.
// ❌ Not deep — nested objects are still referenced.