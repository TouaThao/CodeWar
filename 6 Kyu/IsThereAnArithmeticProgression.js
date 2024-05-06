// Check if the elements of an array form an arithmetic progression
// or if the array contains a sequence of elements that form an arithmetic progression.
// If the entire array forms an arithmetic sequence, the function returns true.
// If it's not an arithmetic progression itself but it contains at least one,
// return the index of the element where the first arithmetic sequence starts.
// If it's not one itself and it doesn't contain any, return false.
// An arithmetic sequence will always consist of at least 3 numbers.
// If this condition is not satisfied, the function will return undefined.
// The function hasArithmProg takes a single parameter, arr, and can return a boolean, a number(the index) or undefined.
// An arithmetic progression is a sequence of numbers such that the difference between two consecutive terms is a constant quantity.
// e.g. 1, 2, 3, 4,... constant = 1 e.g. 9, 7, 5, 3,... constant = -2

function hasArithmProg(arr) {
  if (arr.length < 3) {
    return undefined;
  }

  const diff = arr[1] - arr[0];
  let i;
  for (i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      break;
    }
  }
  if (i === arr.length) {
    return true;
  }

  for (let j = 0; j <= arr.length - 3; j++) {
    if (arr[j + 1] - arr[j] === arr[j + 2] - arr[j + 1]) {
      return j;
    }
  }

  return false;
}
console.log(hasArithmProg([2, 10, 4, 6]), false);

// console.log(hasArithmProg([9, 5, 1]), true);
// console.log(hasArithmProg([9, 1, 2, 14, 46]), false);
// console.log(hasArithmProg([90, 2, 4, 6, 8, 14]), 1);
// console.log(hasArithmProg([9, 1]), undefined);
