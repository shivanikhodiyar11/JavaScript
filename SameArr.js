function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const fq1 = {};
  const fq2 = {};

  for (const val of arr1) {
    fq1[val] = (fq1[val] || 0) + 1;
  }

  for (const val of arr2) {
    fq2[val] = (fq2[val] || 0) + 1;
  }

  for (const key in fq1) {
    if (!(key ** 2 in fq2)) {
      return false;
    }
    if (fq2[key ** 2] !== fq1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [9, 4, 1]));