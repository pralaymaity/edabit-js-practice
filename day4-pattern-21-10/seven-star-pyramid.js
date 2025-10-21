/*
Pattern - 7: Star Pyramid

Input Format: N = 6
Result:
     *     
    ***    
   *****   
  *******  
 ********* 
***********
*/

let num = 6;

function starPyramid(num) {
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
  return str;
}

console.log(starPyramid(num));
