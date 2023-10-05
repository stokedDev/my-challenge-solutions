/*
Instructions

Find the First Unrepeated Character
Create a function that accepts a string as an argument and returns the first character that doesn't repeat.

Examples
firstUnrepeatedCharacter("p") ➞ "p"

firstUnrepeatedCharacter("it was then the cold temperature that refreshed") ➞ "l"

firstUnrepeatedCharacter("the quick brown fox jumps and lands safely") ➞ "t"

firstUnrepeatedCharacter("ttwwoo") ➞ false

firstUnrepeatedCharacter("") ➞ false

Notes
An empty string should return false.
If every character repeats, return false.
Don't worry about case sensitivity or non-alphanumeric characters.
*/

/* My Solution */

function firstUnrepeatedCharacter(str) {
	const firstUnrepeatedChar = [...str]
		.filter((el,i,arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0]; 
	return firstUnrepeatedChar? firstUnrepeatedChar: !1;
}