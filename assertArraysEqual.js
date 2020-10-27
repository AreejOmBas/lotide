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

const assertArraysEqual = function(arr1, arr2){
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (eqArrays(arr1,arr2)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: [${arr1}] !== [${arr2}]`);

  }
}

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2],[1]);