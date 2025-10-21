/*
Increasing Number Triangle Pattern

Input Format: N = 6
Result:   
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21
*/


let num = 6;

function rightAngledNumberPyramid(num) {
  let no = 0;
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {

      str += no += 1;
      str += " "
    }
    
    str += "\n";
  }
  return str;
}

console.log(rightAngledNumberPyramid(num));
