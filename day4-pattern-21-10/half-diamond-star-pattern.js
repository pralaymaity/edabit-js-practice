/*
Pattern - 10: Half Diamond Star Pattern

Input Format: N = 6
Result:   
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *
*/

let num = 6;

function halfDiamond(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (j = 0; j <= i; j++) {
      str += "*";
    }

    str += "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(halfDiamond(num));
