const assertEqual = function(actual, expected) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length === 0) {
    return 'undefined';
  } else {
    return arr[0];
  }
};

// TEST CODE
assertEqual(head([5,6,4]), 5);
assertEqual(head([1]), 1);
assertEqual(head([]), 'undefined');
assertEqual(head("Hello"), "H");
