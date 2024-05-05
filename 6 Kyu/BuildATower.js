// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings,
// given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let tower = [];
  let totalWidth = 2 * nFloors - 1;
  for (let i = 1; i <= nFloors; i++) {
    let stars = 2 * i - 1;
    let spaces = (totalWidth - stars) / 2;
    let floor = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
    tower.push(floor);
  }
  return tower;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
