const assertEqual = function(actual, expected) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${actual} !== ${expected}`);

  }
};

const countLetters = function(string) {
  if (!string) {
    return {};
  } else {
    let result = {};
    for (let char of string) {
      if (result.hasOwnProperty(char)) {
        result[char] += 1; 
      } else {
          if(char !== ' ') {
            result[char] = 1;
        }
      }
    }
    return result;
  }
};

let countResult1 = countLetters("LOL LOL   l")
let countResult2 = countLetters("LOL");

assertEqual(countResult1['L'], 4);
assertEqual(countResult1['O'], 2);
assertEqual(countResult2['O'], 1);

