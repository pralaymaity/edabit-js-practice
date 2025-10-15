// Return the Factorial
// Create a function that takes an integer and returns the factorial of that integer.
// That is, the integer multiplied by all positive lower integers.

// Examples
// factorial(3) ➞ 6

// factorial(5) ➞ 120

// factorial(13) ➞ 6227020800

let num = 5;

function factorial(num) {
  let fact = 1;

  for (let i = num; i > 0; i--) {
    fact *= i;
  }

  return fact;
}
console.log(factorial(num));
