/*
Pattern - 12: Number Crown Pattern

Result:   
1          1
12        21
123      321
1234    4321
12345  54321
123456654321
*/

let num = 6;

function numberCrown(num) {
  let no = 0;
  let str = "";

  for (let i = num - 1; i >= 0; i-- ){

    for(j = 0; j < num - i; j++){
        str += no += 1
    }

     for(j = 0; j < i * 2; j++){
        str += " "
    }

     for(j = 0; j < num - i; j++){
        str += no += 1
    }
    no = 0
    str = str + "\n"
  }
  

  return str;
}

console.log(numberCrown(num));
