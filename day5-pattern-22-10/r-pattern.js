/* r pattern

    * * * * *
    *       *
    * * * * * 
    * *
    *   *
    *     *
    *       *
*/

let num = 3;

function pattern(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num * 2 - 1; j++) {
      if (i === 0 || i === num - 1 || j === 0 || j === num + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  for (let k = 0; k <= num; k++) {
    for (j = 0; j <= num + 1; j++) {
      if (j === 0 || j === k + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }

    str += "\n";

  }

  return str;
}

console.log(pattern(num));
