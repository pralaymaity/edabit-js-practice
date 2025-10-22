
/*

l pattern

    *
    *
    * 
    * 
    * * * * * 
*/


let num = 4 ;

function pattern(num) {
  let str = "";

  for(let i = 0; i < num; i++ ){
    str += "*"
    str += "\n"
  }

  for(let i = 0; i < num + 1; i++ ){
    str += "*"
    str += " "
  }

  return str

}

console.log(pattern(num));
