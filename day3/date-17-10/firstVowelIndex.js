/*Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1*/

let arr = "STRAWBERRY";

function firstIndexVowel(arr) {
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes(arr[i])) {
      return i;
    }
  }

  return "No vowel found";
}
console.log(firstIndexVowel(arr));
