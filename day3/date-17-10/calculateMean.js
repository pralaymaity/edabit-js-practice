/*
Calculate the Mean
Create a function that takes an array of numbers and
returns the mean (average) of all those numbers.

Examples
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55

mean([2, 3, 2, 3]) ➞ 2.50

mean([3, 3, 3, 3, 3]) ➞ 3.00
*/

let arr = [1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]

function CalculateMean (arr){

    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum/arr.length

}

console.log(CalculateMean(arr));
