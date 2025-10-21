/*Pattern - 20: Symmetric-Butterfly Pattern

Examples:

Input Format: N = 3
Result: 
*    *
**  **
******
**  **
*    *
*/

let num = 3;

function halfDiamond(num) {
  let str = "";

  for (let i = 0; i < num; i++) {

    for (let j = 0; j <= i; j++){
        str += "*"
    }

    for (let j = 0; j < 2 * (num - i - 1); j++) {
      str += " ";
    }

    for (let j = 0; j <= i; j++) {
      str += "*";
    }

    str += "\n";
  }

  for(let i = num - 2; i >= 0; i--){

    for (let j = 0; j <= i; j++){
        str += "*"
    }

    for(let j = 0;  j < 2 * (num - i -1); j++){
        str = str + " "
    }

    for (let j = 0; j <= i; j++){
        str += "*"
    }

    str += "\n";
  }

return str
}

console.log(halfDiamond(num));



