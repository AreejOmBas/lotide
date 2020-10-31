

const tail = function(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    let newArr = arr.slice();
    newArr.shift();
    return newArr;
  }
};

module.exports = tail;

