/*

a - pattern


                            *
                        *       *
                    *              *
                *   *   *   *   *  *    *
            *                               *

*/

let num = 3;

function pattern(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    for (j = 0; j < 2 * i + 1; j++) {
      if (j === 0 || (j === num - 1 && i === 1) || j === num + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  for (let i = 0; i <= num + 1; i++) {
    for (let j = 0; j <= num + 1; j++) {
      if (i === 0 || j === 0 || j === num + 1) {
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
