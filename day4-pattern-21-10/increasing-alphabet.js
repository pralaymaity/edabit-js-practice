/*

Pattern-14: Increasing Letter Triangle Pattern
A
A B
A B C
A B C D
A B C D E
A B C D E F
*/


let num = 6;

function alphabet(num) {
  
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {

      str += String.fromCharCode(65 + j);
      str += " "
    }
    
    str += "\n";
  }
  return str;
}

console.log(alphabet(num));