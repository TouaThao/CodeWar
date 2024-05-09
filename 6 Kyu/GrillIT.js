// Introduction
// A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of
// paper through a pierced sheet (of paper or cardboard or similar).
//The earliest known description is due to the polymath Girolamo Cardano in 1550.
// His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written,
// then later read, through its various apertures. The written fragments of the plaintext could be further disguised
// by filling the gaps between the fragments with anodyne words or letters.
// This variant is also an example of steganography, as are many of the grille ciphers. Wikipedia Link

// Tangiers1Tangiers2

// Task
// Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
// The code is a nonnegative integer and it decrypts in binary the message.

// grille("abcdef", 5)  => "df"

// message : abcdef
// code    : 000101
// ----------------
// result  : df

function grille(message, code) {
  if (message.length === 0) {
    return "";
  }

  let binary = code.toString(2);

  if (binary.length > message.length) {
    binary = binary.slice(-message.length);
  } else {
    binary = binary.padStart(message.length, "0");
  }

  let codeMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (binary[i] === "1") {
      codeMessage += message[i];
    }
  }
  return codeMessage;
}

console.log(grille("abcdef", 5), "df");
console.log(grille("", 5), "");
console.log(grille("abc", 1), "c");
console.log(grille("tcddoadepwweasresd", 77098), "codewars");
console.log(grille("ab", 255), "ab");
console.log(grille("ab", 256), "");
console.log(grille("abcde", 32), "");
