// Introduction
// There is a war and nobody knows - the alphabet war!
// The letters called airstrikes to help them in war - dashes and dots are spread everywhere on the battlefield.

// Task
// Write a function that accepts reinforces array of strings and airstrikes array of strings.
// The reinforces strings consist of only small letters. The size of each string in reinforces array is the same.
// The airstrikes strings consists of * and white spaces. The size of each airstrike may vary. There may be also no airstrikes at all.

// The first row in reinforces array is the current battlefield.
// Whenever some letter is killed by bomb, it's replaced by a letter from next string in reinforces array on the same position.
// The airstrike always starts from the beginning of the battlefield.
// The * means a bomb drop place. The each * bomb kills letter only on the battelfield.
// The bomb kills letter on the same index on battlefield plus the adjacent letters.
// The letters on the battlefield are replaced after airstrike is finished.
// Return string of letters left on the battlefield after the last airstrike. In case there is no any letter left in reinforces on specific position, return _.

function alphabetWar(reinforces, airstrikes) {
  let battlefield = reinforces[0].split("");

  for (let strike of airstrikes) {
    let hit = new Array(battlefield.length).fill(false);

    for (let i = 0; i < strike.length; i++) {
      if (strike[i] === "*") {
        hit[Math.max(0, i - 1)] = true;
        hit[i] = true;
        if (i + 1 < battlefield.length) hit[i + 1] = true;
      }
    }

    for (let i = 0; i < battlefield.length; i++) {
      if (hit[i]) {
        battlefield[i] = "_";
      }
    }

    for (let i = 0; i < battlefield.length; i++) {
      if (battlefield[i] === "_") {
        for (let j = 1; j < reinforces.length; j++) {
          if (reinforces[j][i] !== "_") {
            battlefield[i] = reinforces[j][i];
            reinforces[j] =
              reinforces[j].substring(0, i) +
              "_" +
              reinforces[j].substring(i + 1);
            break;
          }
        }
      }
    }
  }

  return battlefield.join("");
}
