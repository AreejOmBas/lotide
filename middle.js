
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else {
    let midIndex = Math.floor(arr.length / 2);
    let result = [];
    if (arr.length % 2 !== 0) { // Checking for odd length
      result.push(arr[midIndex]);
    } else {
      result = arr.slice(midIndex - 1, midIndex + 1);
    }
    return result;
  }
};
module.exports = middle;
