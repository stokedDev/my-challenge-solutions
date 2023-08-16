/*
Two 2D arrays must have an equal number of
arrays that each have the same length to be subtracted. 
In which case, the subtraction of two 2D arrays A and
B will be a 2D array that has the same number 
of arrays ( with the same length ) as A and B.

The result of the subtraction of A and B, 
denoted A - B is computed by subtracting 
corresponding elements of A and B.

Create a function called sub that takes 2 2D arrays 
as arguments. Have the sub function return a 2D array C, 
the subtraction of the numbers in order of index of array B 
from those of array A. 
sub returns a 2D array (2D array C). C = A - B.

Examples
sub([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
sub([
  [2, 4, 7],
  [5, 8, 12],
  [17, 10.2, 20]
], [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [1, 2, 4],
  [1, 3, 6],
  [10, 2.2, 11]
]
The sub function also needs to treat
strings of numbers as actual numbers.
*/

/* My 1st Solution */

function sub(A, B){
    const C = [];
  for(let i = 0; i < A.length; i++){
      const cInnerArr = [];
      for(let q = 0; q < A[i].length; q++){
          cInnerArr.push((A[i][q]*1)-(B[i][q]*1));
       }
      C.push(cInnerArr);
  }
   return C;
}
/* My 2nd Solution */

function sub(A, B){
  return A.map((el,i)=>el.map((elA, iA)=>elA = A[i][iA]-B[i][iA]));
}