/*Highest Digit
Create a function that takes a number as an argument and returns the highest digit in that number.

Examples
highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7*/


let n = 377401

function highestDigit (){
    let str = n.toString().split("")

    let max = 0 

    str.map((data , idx)=>{
        return  (Number.parseInt(data) > max)? max = data : "invalid" 
    })

    return max
}

console.log(highestDigit(n));

