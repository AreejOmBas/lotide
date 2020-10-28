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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (!object1 || !object2) {
    return false;
  } else {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
    if (object1Keys.length !== object2Keys.length) {
      return false;
    }
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (eqObjects(object1,object2)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);

  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab , ba);
assertObjectsEqual(ab,abc);