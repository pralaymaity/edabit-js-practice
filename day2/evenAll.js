/*Even All the Way
Given an array of numbers, return an array which contains
all the even numbers in the original array, which also have even indices.

Examples
getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]) ➞ []*/

let arr = [0, 1, 2, 3, 4];

function evenNumbersIndex(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && i % 2 == 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(evenNumbersIndex(arr));
