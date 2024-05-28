// You have a positive number n consisting of digits.
//You can do at most one operation: Choosing the index of a digit in the number,
// remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.
// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

function smallest(number) {
  let digits = number.toString().split("");
  let n = digits.length;
  let minNumber = Number.MAX_SAFE_INTEGER;
  let result = [parseInt(digits.join("")), 0, 0];
  if (new Set(digits).size === 1) {
    return result;
  }
  for (let i = 0; i < n; i++) {
    let digitToMove = digits[i];

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        let newDigits = [...digits];
        newDigits.splice(i, 1);
        newDigits.splice(j, 0, digitToMove);
        let newNumber = parseInt(newDigits.join(""));
        if (
          newNumber < minNumber ||
          (newNumber === minNumber && i < result[1]) ||
          (newNumber === minNumber && i === result[1] && j < result[2])
        ) {
          minNumber = newNumber;
          result = [newNumber, i, j];
        }
      }
    }
  }

  return result;
}
console.log(smallest(261235, [126235, 2, 0]));
console.log(smallest(209917, [29917, 0, 1]));
console.log(smallest(285365, [238565, 3, 1]));
console.log(smallest(269045, [26945, 3, 0]));
console.log(smallest(296837, [239687, 4, 1]));
