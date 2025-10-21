/*
Pattern-15: Reverse Letter Triangle Pattern

Input Format: N = 6
Result:   
A B C D E F
A B C D E 
A B C D
A B C
A B
A

*/

let num = 6;

function alphabet(num) {
  
  let str = "";
  for (let i = num; i > 0; i--) {
    for (let j = 0; j < i; j++) {

      str += String.fromCharCode(65 + j);
      str += " "
    }
    
    str += "\n";
  }
  return str;
}

console.log(alphabet(num));