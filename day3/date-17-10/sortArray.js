/*Sort Numbers in Descending Order
Create a function that takes any non-negative number as an argument and return
it with its digits in descending order.
Descending order is when you sort from highest to lowest.

Examples
sortDescending(123) ➞ 321

sortDescending(1254859723) ➞ 9875543221

sortDescending(73065) ➞ 76530*/

let num = (1254859723);

function sortArray(num) {
  return Number(String(num).split("").sort((a,b)=> b - a).join(""))
}

console.log(sortArray(num));
