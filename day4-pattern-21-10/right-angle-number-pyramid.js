/*Pattern - 3: Right-Angled Number Pyramid

Problem Statement: Given an integer N, print the following pattern : 

Input Format: N = 6
Result:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
*/

let num = 6;

function rightAngledNumberPyramid(num) {
  let no = 0;
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      //   no = no + 1;

      //   str += no;

      str += no += 1;
    }
    no = 0;
    str += "\n";
  }
  return str;
}

console.log(rightAngledNumberPyramid(num));
