// Repeating Letters
// Create a function that takes a string and returns a string in
// which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "

let str = "String";

function repeatLetters(str) {
  let splitWords = str.split("");
  let store = [];

  splitWords.map((el, idx) => {
    return store.push(el + el)
  });

  let result = store.join("");
  console.log(typeof result);
  

  return result
}

console.log(repeatLetters(str));


