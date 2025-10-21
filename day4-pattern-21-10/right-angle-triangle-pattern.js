/*
Pattern-2: Right-Angled Triangle Pattern

Input Format: N = 6
Result:
* 
* * 
* * *
* * * *
* * * * *
* * * * * *
*/

let num = 6;

function rightAngledTriangle(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n"
  }
  return str;
}

console.log(rightAngledTriangle(num));
