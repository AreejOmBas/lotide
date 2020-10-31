
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');




console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false));
console.log(assertEqual(eqArrays([3, 2, 1], [3, 2, 1]),true));
console.log(assertEqual(eqArrays([]),false));
console.log(assertEqual(eqArrays([45, 2, 3], [1, 2, 3]),false));
console.log(assertEqual(eqArrays([1, 2], [3, 2, 1]),false));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]),true));