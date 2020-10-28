const assertEqual = function(actual, expected) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${actual} !== ${expected}`);

  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  if (!allItems.length) {
    return {};
  } else {

    let resultObj = {};

    for (let prop in itemsToCount) {
      let counter = 0;
      if (itemsToCount[prop]) {
        for (let item of allItems) {
          if (item === prop) {
            counter += 1;
            resultObj[prop] = counter;
          }
        }
      }
    }
    return resultObj;
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


//console.log(result1);