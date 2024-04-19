// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  }
  return "No";
}

console.log((boolToWord(true), "Yes"));
console.log((boolToWord(false), "No"));
