//Find the Smallest and Biggest Numbers

/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, 
in that order.*/

/*
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
*/

let arr = [1, 2, 3, 4, 5]

function minMax (arr){

    let max = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    
    let min = max

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }

    return [min , max]



}
console.log(minMax(arr));

