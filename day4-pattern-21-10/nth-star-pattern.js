/*
Pattern - 9: Diamond Star Pattern

Input Format: N = 6
Result:   
     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *
*/

let num = 6;

function nineStarPyramid(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    str += "\n";
  }

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

    str += "\n";
  }
  return str;
}

console.log(nineStarPyramid(num));
