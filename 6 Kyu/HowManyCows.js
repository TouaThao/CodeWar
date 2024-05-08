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

function countCows(n) {
  if (Array.isArray(n) && n.length === 0) {
    return null;
  }
  if (n === null || n === undefined || typeof n !== "number" || isNaN(n)) {
    return null;
  }

  if (n < 0 || !Number.isInteger(n)) {
    return null;
  }

  if (n === 0 || n === 1 || n === 2) {
    return 1;
  } else if (n === 3) {
    return 2;
  }

  let results = [1, 1, 1, 2];

  for (let i = 4; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 3];
  }

  return results[n];
}
console.log(countCows(1), 1);
console.log(countCows(3), 2);
console.log(countCows(5), 4);
