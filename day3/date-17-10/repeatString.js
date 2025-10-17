// Recursion to Repeat a String n Number of Times
// Create a recursive function that takes two parameters and
// repeats the string n number of times.
// The first parameter txt is the string to be repeated and
// the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

// Examples
// repetition("ab", 3) ➞ "ababab"

// repetition("kiwi", 1) ➞ "kiwi"

// repetition("cherry", 2) ➞ "cherrycherry"

let str = "cherry";
let repeatation = 2



function repeatString(str,repeatation ) {
  
    let store = ""
    while(repeatation > 0){
        store = store + str
        repeatation--
    }
    return store
}

console.log(repeatString(str, repeatation));
