/*
Pattern - 11: Binary Number Triangle Pattern
Input Format: N = 6
Result:   
1
01
101
0101
10101
010101
*/

let num = 6;

function binaryNumber(num) {
  let str = "";

  for (let i = 0; i < num; i++) {

    let start = i % 2 == 0 ? 1 : 0;

    for (let j = 0; j <= i; j++) {
      str += start;

      start = start === 1 ? 0 : 1;
    }
    str += "\n";
  }
  return str;
}

console.log(binaryNumber(num));
