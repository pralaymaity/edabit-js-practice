/*Find the Amount of Potatoes
Create a function to return the amount of potatoes there are in a string.

Examples
potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1*/

let str = "potato"

function countPotato (str){
    let result = str.split("potato").length - 1
    return result

}
console.log(countPotato(str));
 




