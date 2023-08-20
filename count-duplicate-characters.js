/* 
Count Duplicate Characters
Create a function that takes 
a string and returns the number 
of letters and numbers that 
occur more than once.

Examples
duplicateCount("123456") ➞ 0

duplicateCount("11cccfy") ➞ 2

duplicateCount("accumulator") ➞ 3

duplicateCount("Activate") ➞ 1
// Uppercase and lowercase of 
   the same letter do not reflect
   duplication.
Notes
For this challenge, 
the argument string is only meant
to have alphanumeric characters.
*/

/* My Solution */

function duplicateCount(str){
	return new Set([...str]
		.filter((el,i,arr)=>arr.indexOf(el) !== arr.lastIndexOf(el))).size;		
}