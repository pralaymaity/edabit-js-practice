/*Largest Swap
Write a function that takes a two-digit number and determines
if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true
*/

function largestSwap(num) {
  let splitNum = num.toString().split("").reverse();

  let joinNumber = Number.parseInt(splitNum.join(""));

  let boolean = null;

  if (num >= joinNumber) {
    return (boolean = true);
  } else {
    boolean = false;
  }

  return boolean;
}
console.log(largestSwap(99));
