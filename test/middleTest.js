const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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
