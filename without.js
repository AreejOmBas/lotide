// Function to test equality of two arrays (shallow comparision)
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
// Assertion Function to test the equality of two arrays
const assertArraysEqual = function(arr1, arr2) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (eqArrays(arr1,arr2)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: [${arr1}] !== [${arr2}]`);

  }
};
// A Function that removes unwanted elements from an array without modifying the original array.
const without = function(source,itemsToRemove) {
  if (!source.length || source === undefined || itemsToRemove === undefined || !itemsToRemove) {
    return [];
  } else {
    let result = source.slice();
    for (let item of itemsToRemove) {
      if (source.includes(item)) {
        let index = result.indexOf(item);
        result.splice(index,1);
      }
          
    }
    return result;
  }
};
// TEST CASES:
assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),['1','2']);
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]),['1']);
assertArraysEqual(without(["1", "2", "3"], ["1", 2, "3"]),['2']);
assertArraysEqual(without([], [1, 2, "3"]),[]);
assertArraysEqual(without([], []),[]);

// TEST: testing that original array not modified;
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/*
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"])
console.log(without(["1", "2", "3"], [1, "2", "3"])) // => ["1"])
console.log(without(["1", "2", "3"], ["1", 2, "3"])) // => ["2"])
console.log(without(["2"], [1, "2", "3"])) // => [])
console.log(without([], [1, 2, "3"])) // => [])
console.log(without([], [])) // => [])
*/
