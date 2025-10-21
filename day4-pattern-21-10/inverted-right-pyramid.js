/*
Pattern-5: Inverted Right Pyramid

Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
*
*/

let num = 5;

function invertedRightPyramid(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = num; j > i; j--) {
      str += "*";
    }

    str += "\n";
  }
  return str;
}

console.log(invertedRightPyramid(num));
