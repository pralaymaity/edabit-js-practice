/*
Pattern - 6: Inverted Numbered Right Pyramid

Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1*/

let num = 6;

function invertedRightPyramid(num) {
  let str = "";
  let count = 0

  for (let i = 0; i < num; i++) {
    for (let j = num; j > i; j--) {
      str += count  += 1
    }
    count = 0
    str += "\n";
  }
  return str;
}

console.log(invertedRightPyramid(num));