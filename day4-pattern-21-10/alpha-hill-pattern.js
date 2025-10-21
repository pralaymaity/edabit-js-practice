/*Alpha-Hill Pattern


Input Format: N = 6
Result:   
     A     
    ABA    
   ABCBA   
  ABCDCBA  
 ABCDEDCBA 
ABCDEFEDCBA
*/

let num = 6;

function alphabet(num) {
  let str = "";

  for (let i = 0; i < num; i++) {


    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + j);
    }

    
    for (let j = i - 1; j >= 0; j--) {
      str += String.fromCharCode(65 + j);
    }

    str += "\n";
  }
  return str;
}

console.log(alphabet(num));
