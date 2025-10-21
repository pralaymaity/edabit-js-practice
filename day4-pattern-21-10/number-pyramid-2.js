/*Pattern - 4: Right-Angled Number Pyramid - II

Problem Statement: Given an integer N, print the following pattern : 

Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6*/

let num = 5;

function rightAngledNumberPyramid(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      str += i + 1;
    }

    str += "\n";
  }
  return str;
}

console.log(rightAngledNumberPyramid(num));
