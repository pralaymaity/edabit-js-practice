/*
Pattern-19: Symmetric-Void Pattern

Input Format: N = 3
Result: 
******
**  **
*    *
*    *
**  **
******
*/

let num = 3;

function alphabet(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }

    for (let j = 0; j < i * 2; j++) {
      str += " ";
    }

    for (let j = i; j < num; j++) {
      str += "*";
    }

    str += "\n";
  }

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }

    for (let j = 0; j < 2 * (num - i - 1); j++) {
      str += " ";
    }

    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }

    str += "\n";
  }

  return str;
}

console.log(alphabet(num));
