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


const letterPositions = function(sentence) {
  const results = {};
  if (!sentence) {
    return {};
  } else {
    let index = 0;
    for (let char of sentence) {
      if (results.hasOwnProperty(char)) {
        results[char].push(index);
      } else {
        if (char !== ' ') {
          results[char] = [];
          results[char].push(index);
        }
      }
      index ++;
    }
  }
  return results;
};

//TEST CASES
let result1 = letterPositions("hello"); //h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ]
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2,3]);
assertArraysEqual(result1['o'], [4]);


/* console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
 */