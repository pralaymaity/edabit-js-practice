/*Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
See step 1, 2 and 3 in the image above.*/

// ex -
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

function matchstickHouse(n) {
  if (n === 0) return 0;
  if (n < 0) return "No negetive number allowed";

  let matchStick = 6 * n - (n - 1);
  return matchStick;
}

console.log(matchstickHouse(-1));
