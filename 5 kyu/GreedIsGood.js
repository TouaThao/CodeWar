// Greed is a dice game played with five six-sided dice.
//Your mission, should you choose to accept it, is to score a throw according to these rules.
//You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll.
// For example, a given "5" can only count as part of a triplet (contributing to the 500 points)
// or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

function score(dice) {
  let total = 0;
  let map = {};
  for (let i = 0; i < dice.length; i++) {
    let number = dice[i];
    if (!map.hasOwnProperty(number)) {
      map[number] = 1;
    } else {
      map[number] += 1;
    }
    Object.keys(map).forEach((number) => {
      let num = parseInt(number);
      if (map[num] >= 3) {
        if (num === 1) {
          total += 1000;
        } else {
          total += num * 100;
        }
        map[num] -= 3;
      }
    });
  }
  total += (map[1] || 0) * 100;
  total += (map[5] || 0) * 50;

  return total;
}
console.log(
  "Testing score([2, 3, 4, 6, 2]): Expected 0, Got:",
  score([2, 3, 4, 6, 2])
);
console.log(
  "Testing score([4, 4, 4, 3, 3]): Expected 400, Got:",
  score([4, 4, 4, 3, 3])
);
console.log(
  "Testing score([2, 4, 4, 5, 4]): Expected 450, Got:",
  score([2, 4, 4, 5, 4])
);
console.log(
  "Testing score([1, 1, 1, 3, 1]): Expected 1100, Got:",
  score([1, 1, 1, 3, 1])
);
