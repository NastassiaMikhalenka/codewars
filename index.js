// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.


function multiplicationTable(row,col){
    var array = [];
   for (var i = 1; i <= row; i++){
     var array2 = [];
      for (var j = 1; j <= col; j++){
           array2.push(j * i);
         }
     array.push(array2);
   }
   return array;
 }


//  I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

// Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.

// As usual, a few examples might be way better than thousands of words from me:

// squaresNeeded(0) === 0
// squaresNeeded(1) === 1
// squaresNeeded(2) === 2
// squaresNeeded(3) === 2
// squaresNeeded(4) === 3
// Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!

function squaresNeeded(grains){
    let s = 0;
  
    while(2 ** s - 1 < grains) {
      s++;
    }
  
    return s;
    
  }


//   To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.


function multiplyAll(arr) {
    return function(n) {
      if (arr.length == 0){
        return []; 
        } else {
          let result = []
        for (let i = 0; i < arr.length; i++){
          result.push(arr[i]*n)
        }
          return result
      }
    }
  }

