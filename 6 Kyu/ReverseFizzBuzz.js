// FizzBuzz is often one of the first programming puzzles people learn. Now undo it with reverse FizzBuzz!

// Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

// Notes:

// If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
// All numbers in the sequence will be greater than zero.
// You will never receive an empty sequence.
// Examples
// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

function reverseFizzBuzz(s) {
  let starting = [];
  const fizzBuzzMap = {
    Fizz: 3,
    Buzz: 5,
    FizzBuzz: 15,
  };

  let parts = s.split(" ");
  let startingIndex = -1;

  for (let i = 0; i < parts.length; i++) {
    if (!isNaN(parts[i])) {
      startingIndex = parseInt(parts[i], 10) - i;
      break;
    }
  }

  if (startingIndex === -1) {
    for (let i = 0; i < parts.length; i++) {
      if (
        parts[i] === "Fizz" ||
        parts[i] === "Buzz" ||
        parts[i] === "FizzBuzz"
      ) {
        let multiples = fizzBuzzMap[parts[i]];
        for (let num = 1; num <= 100; num++) {
          if (num % multiples === 0) {
            let potentialStart = num - i;
            if (validateSequence(potentialStart, parts, fizzBuzzMap)) {
              startingIndex = potentialStart;
              break;
            }
          }
        }
      }
      if (startingIndex !== -1) break;
    }
  }

  if (startingIndex !== -1) {
    return generateSequence(startingIndex, parts.length);
  } else {
    return "No valid sequence found";
  }
}

function validateSequence(startIndex, parts, fizzBuzzMap) {
  for (let i = 0; i < parts.length; i++) {
    let num = startIndex + i;
    let expected = getFizzBuzz(num, fizzBuzzMap);
    if (expected !== parts[i]) {
      return false;
    }
  }
  return true;
}

function generateSequence(start, length) {
  return Array.from({ length }, (_, i) => start + i);
}

function getFizzBuzz(num, fizzBuzzMap) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0 && num % 5 !== 0) return "Fizz";
  if (num % 5 === 0 && num % 3 !== 0) return "Buzz";
  return num.toString();
}

console.log(reverseFizzBuzz("1 2 Fizz 4 Buzz"), [1, 2, 3, 4, 5]);
// console.log(reverseFizzBuzz("Fizz 688 689 FizzBuzz"), [687, 688, 689, 690]);
// console.log(reverseFizzBuzz("Fizz Buzz"), [9, 10]);
