// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// n - 1 x n / 2

function rowSumOddNumbers(n) {
  //   if (n == 1) {
  //     return 1;
  //   }
  //   const indexBeforeN = ((n - 1) * n) / 2;
  //   const startingOddNumber = 2 * indexBeforeN + 1;
  //   let sum = 0;
  //   for (let i = 0; i < n; i++) {
  //     sum += startingOddNumber + 2 * i;
  //   }
  //   return sum;

  return n * n * n;
}

console.log(rowSumOddNumbers(3), 27);
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(42), 74088);
