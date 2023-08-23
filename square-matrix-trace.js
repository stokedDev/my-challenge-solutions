/* 

Square Matrix Trace

Introduction

In math, a matrix is a rectangular array 
or table of values arranged in rows and columns.

Matrix Example:

[
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]
A square matrix has 
the same number of rows and columns.

According to linear algebra, 
the trace of the square matrix above 
is defined to be the sum of 
elements on the main diagonal 
(from the upper left to the lower right) 
so the trace of the example above is 6.

Instruction

Create a function that takes 
a matrix as an argument and 
returns its trace if its square, else 0.

Examples
getTrace([
  [1, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 3]
]) ➞ 5

getTrace([
  [-3, 1, 0, 0],
  [1, -2, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 7]
]) ➞ 2

*/

/* My Solution */

function getTrace(matrix) {
	return matrix.reduce((acc, el, i, arr) => acc + (arr.length == arr[i].length? el[i]: 0), 0);
}

/* My Solution 2 

function getTrace(matrix) {
    return matrix[0].length === matrix.length? 
        matrix.reduce((acc, el, i, arr) => acc + arr[i][i],0): 0;
}
*/