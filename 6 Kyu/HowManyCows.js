// Consider having a cow that gives a child every year from her fourth year of life on and all her subsequent children do the same.

// After n years how many cows will you have?

// After n years	Cow count
// 0	1
// 1	1
// 3	2
// 4	3
// 10	28
// Return null if n is not an integer.

// Note: Assume all the cows are alive after n years.

// function countCows(n) {
//   if (Array.isArray(n) && n.length === 0) {
//     return null;
//   }
//   if (n === null || n === undefined || typeof n !== "number" || isNaN(n)) {
//     return null;
//   }

//   if (n < 0 || !Number.isInteger(n)) {
//     return null;
//   }

//   if (n === 0 || n === 1 || n === 2) {
//     return 1;
//   } else if (n === 3) {
//     return 2;
//   }

//   let results = [1, 1, 1, 2];

//   for (let i = 4; i <= n; i++) {
//     results[i] = results[i - 1] + results[i - 3];
//   }

//   return results[n];
// }

//Better solution
function countCows(n) {
  if (n !== +n) return null;

  let [a, b, c] = [1, 1, 1];

  for (let i = 2; i < n; i++) [a, b, c] = [b, c, a + c];

  /// 2 a =1 b =1 c = 1 +1 = 2
  /// 3 a=1 b= 2 c = 1+2 =3
  /// 4 a=2 b=3 c= 2+3= 5
  return c;
}

console.log(countCows(1), 1);
console.log(countCows(3), 2);
console.log(countCows(5), 4);
