const assertEqual = function(actual, expected) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${actual} !== ${expected}`);

  }
};

module.exports = assertEqual;


