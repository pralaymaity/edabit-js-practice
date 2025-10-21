/*
Pattern-1: Rectangular Star Pattern

* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * *
*/

let num = 5;

function regularStarPattern(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }
  return str;
}

console.log(regularStarPattern(num));
