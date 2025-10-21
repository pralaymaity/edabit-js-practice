/*
Pattern - 8: Inverted Star Pyramid

Input Format: N = 6
Result:     
***********
 *********
  *******
   ***** 
    ***    
     *
     
*/

let num = 6;

function eightStarPyramid(num) {
  let str = "";

  for (let i = num - 1; i >= 0; i--) {
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    str += "\n"
  }
  return str;
}

console.log(eightStarPyramid(num));
