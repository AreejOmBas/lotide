
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

const assertArraysEqual = function(arr1, arr2){
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (eqArrays(arr1,arr2)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: [${arr1}] !== [${arr2}]`);

  }
};



const takeUntil = function(array, callback) {
  let slice  = [];
  
  for (let item of array) {
    if (callback(item)) {
      return slice;
    } else {
      slice.push(item);
    }
  }
  return slice;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);


assertArraysEqual(results1 , [ 1, 2, 5, 7, 2 ]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2 , [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
