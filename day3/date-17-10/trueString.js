// Is it True?
// In this challenge you will be given a relation between two numbers,
// written as a string. Write a function that determines if the relation is true or false.

// Examples
// isTrue("2=2") ➞ true

// isTrue("8<7") ➞ false

// isTrue("5=13") ➞ false

// isTrue("15>4") ➞ true

let str = "16>7";

function trueString(str) {
  let splitStr = str.split(">");
  //return splitStr

  for (let i = 0; i < splitStr.length - 1; i++) {
    if (Number.parseInt(splitStr[i]) >= Number.parseInt(splitStr[i + 1])) {
      return true;
    }
  }

  return "false";
}

console.log(trueString(str));
