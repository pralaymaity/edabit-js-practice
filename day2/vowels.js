/*How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels
contained within it.

Examples
countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4*/

let str = "Celebration";

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVowels(str));
