/*Remove Every Vowel from a String
Create a function that takes a string and returns a new string with all vowels removed.

Examples
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"*/

let str = "I have never seen a thin person drinking Diet Coke.";

function removeVowels(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if(!vowels.includes(str[i])){
        newStr += str[i]
    }
  }

  return newStr
}
console.log(removeVowels(str));
