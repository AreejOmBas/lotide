const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (eqArrays(arr1,arr2)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: [${arr1}] !== [${arr2}]`);

  }
};

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else {
    let midIndex = Math.floor(arr.length / 2);
    let result = [];
    if (arr.length % 2 !== 0) { // Checking for odd length
      result.push(arr[midIndex]);
    } else {
      result = arr.slice(midIndex - 1, midIndex + 1);
    }
    return result;
  }
};

// TEST CASES
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]),[5,6]);

// TEST CASES for middle()
/* console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5,6,7]));
console.log(middle([1,2,3,4,5,6,7,8]));
console.log(middle([1,2,3,4,5,6,7,8,9])); */
