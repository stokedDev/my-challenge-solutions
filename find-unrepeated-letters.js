/*
Find the Unrepeated Letters
Create a function that takes a string 
and returns an array of the letters that did not repeat.

Examples
findLetters("apple") ➞ ["a", "l", "e"]

findLetters("color") ➞ ["c", "l", "r"]

findLetters("accurate") ➞ ["u", "r", "t", "e"]
Notes
The final array should not include letters that occur more than once in the string.
Return the letters in the order they were originally in, do not sort them.
All letters will be in lowercase.
*/

/* My Solution */

function findLetters(str){
    return [...str].filter((el) => str.indexOf(el) == str.lastIndexOf(el));
}