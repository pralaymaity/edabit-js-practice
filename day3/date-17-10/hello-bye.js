/*
Say "Hello" Say "Bye"
Write a function that takes a string name and a number num (either 0 or 1) and
return "Hello" + name if num is 1, otherwise return "Bye" + name.

Examples
sayHelloBye("alon", 1) ➞ "Hello Alon"

sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

sayHelloBye("jose", 0) ➞ "Bye Jose"
*/

let str = "Pralay";

let num = 0;

function helloBye(str, num) {
    if( num === 1){
        return `Hello ${str}` 
    }

    return `Bye ${str}`
}

console.log(helloBye(str, num));
