/*
Pattern - 22: The Number Pattern

Input Format: N = 3
Result: 
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3
*/

let num = 6;

function numberPattern(num) {
  let str = "";

  for (let i = 0; i < num * 2 - 1; i++) {
    for (j = 0; j < num * 2 - 1; j++) {
      
      let top = i;
      let left = j;
      let right = 2 * num - 2 - j;
      let bottom = 2 * num - 2 - i;

      str = str + (num - Math.min(top, left, right, bottom));
    }

    str += "\n";
  }

  return str;
}
console.log(numberPattern(num));
