// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log((solution("h"), "h"));

//Duplicate. This was a mistake from codeWar. They gave me the same problem =( ..
