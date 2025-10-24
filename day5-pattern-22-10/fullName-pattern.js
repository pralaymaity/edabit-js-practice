/* p pattern

   *****
   *   *
   *****
   *
   * 
   * 
*/

let num = 3;

function firstLetterPattern(num) {
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

  for (let k = 0; k < num; k++) {
    str += "*";
    str += "\n";
  }

  return str;
}

function secondLetterPattern(num) {
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

function thirdLetterPattern(num) {
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

function fourthLetterPattern(num) {
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

function fifthLetterPattern(num) {
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

function sixthletterPattern(num) {
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


console.log(firstLetterPattern(num));
console.log(secondLetterPattern(num));
console.log(thirdLetterPattern(num));
console.log(fourthLetterPattern(num));
console.log(fifthLetterPattern(num));
console.log(sixthletterPattern(num));






