/*Number of Squares in an N * N Grid
Create a function that calculates the number of different squares in an n * n square grid.*/


/*
Examples
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55
Explanation
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
*/


function square (n){

    let total = 0

    for(let i = 1; i <= n; i++){
        total = total + (i * i)
    }

    return total

}

console.log(square(5));

