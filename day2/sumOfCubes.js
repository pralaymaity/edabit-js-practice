// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0


let arr = [1, 5, 9]

function someOfCubes (arr){

    if (arr < 0) return "Invalid number"

    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum = sum + (arr[i] **3)
    }
    return sum

}

console.log(someOfCubes(arr));

