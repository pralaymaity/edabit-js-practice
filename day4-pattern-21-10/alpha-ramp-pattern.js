/*
Pattern - 16: Alpha-Ramp Pattern

A 
B B
C C C
D D D D
E E E E E
F F F F F F
*/


let num = 6;

function alphabet(num) {
  
  let str = "";
  let no = 0
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {

      str += String.fromCharCode(65 + no );
      str += " "
      
    }
    no++
    
    str += "\n";
  }
  return str;
}

console.log(alphabet(num));