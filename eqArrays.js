const assertEqual = function(actual, expected) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${actual} !== ${expected}`);

  }
};

const eqArrays = function(arr1, arr2){
  if(arr1 === undefined || arr2 === undefined){
    return false;
  } else if(arr1.length !== arr2.length){
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  }
};

// console.log(eqArrays([1, 2, 3], [3, 2, 1]) )// => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3]) )// => true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]) )// => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
// console.log(eqArrays([])) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false));
console.log(assertEqual(eqArrays([3, 2, 1], [3, 2, 1]),true));
console.log(assertEqual(eqArrays([]),false));
console.log(assertEqual(eqArrays([45, 2, 3], [1, 2, 3]),false));
console.log(assertEqual(eqArrays([1, 2], [3, 2, 1]),false));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]),true));


