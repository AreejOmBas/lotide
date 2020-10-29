const assertEqual = function(actual, expected) {
  const warnning = String.fromCodePoint('0x1F525');
  const passed = String.fromCodePoint('0x1F389');
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${warnning}${warnning}${warnning} Assertion Failed: ${actual} !== ${expected}`);

  }
};


const findKey = function(obj, callback) {

  let result = undefined;

  for (let key in obj) {
    if (callback(obj[key])) {
      result = key;
      return result;
    }
  }
  return result;

};

const value = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const people = {
  sara :{
    address: '1st street',
    phone: '613111',
    email: 'sara@abc.com'
  },
  mark : {
    address: '2nd street',
    phone: '613222',
    email: 'mark@abc.com'
  },
  teddy :  {
    address: '3rd street',
    phone: '6133333',
    email: 'vas@abc.com'
  }
};

const result = findKey(people,k=> k.address.includes(3));

assertEqual(result, 'teddy');
assertEqual(value,'noma');