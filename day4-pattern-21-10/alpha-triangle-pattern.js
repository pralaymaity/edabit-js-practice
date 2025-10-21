/*
Pattern-18: Alpha-Triangle Pattern
F
E F
D E F
C D E F
B C D E F
A B C D E F
*/

let num = 6;

function alphabet(num) {
  let str = "";

  for (let i = num - 1; i >= 0; i--) {
    for (let j = i; j < num; j++) {
      str += String.fromCharCode(65 + j);
      str += " ";
    }

    str += "\n";
  }
  return str;
}

console.log(alphabet(num));
