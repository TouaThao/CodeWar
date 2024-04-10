// Write a function that takes an array of numbers and returns the sum of the numbers.
//The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  const initialValue = 0;
  return numbers.reduce((acc, current) => acc + current, initialValue);
}
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
