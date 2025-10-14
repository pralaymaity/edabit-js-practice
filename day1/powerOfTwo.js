// The left shift operation is similar to multiplication by powers of two.

/*10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20*/

function powerTwo(n1, n2) {
  if (n2 < 0) return "No negetive value of second parameter";

  let result = n1 * 2 ** n2;
  return result;
}

console.log(powerTwo(5, -2));
