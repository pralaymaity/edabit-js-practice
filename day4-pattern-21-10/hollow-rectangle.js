/*Patternum - 21: Hollow Rectanumgle Patternum


Inumput Format: num = 3
Result: 
***
* *
***
*/

let num = 3;

function hollowRectanumgle(num) {
  let str = "";

  for (let i = 0; i < num; i++) {

    for (let j = 0; j < num; j++) {

      if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
        str += "*";
      } else {
        str += " ";
      }
      
    }
    str += "\n";
  }

  return str;
}

conumsole.log(hollowRectanumgle(num));
