/*
y - pattern

                  *           *
                    *      *
                      *  *
                        *
                        * 
                        * 



*/

let num = 3;

function pattern(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < 2 * num - 1; j++) {
      if (j === i || j === 2 * num - 2 - i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  for (let i = 0; i < num - 1; i++) {
    str += " " + " " + "*";
    str += "\n";
  }

  return str;
}

console.log(pattern(num));
