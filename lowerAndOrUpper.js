/*
Instructions

Write a function that returns:
"lower" if all the letters in a string are lowercase; 
"upper" if all the letters in a string are uppercase;
and "mixed" if there are lowercase and uppercase letters in a string.

Examples
getCase("...wholesome...") -> "lower"

getCase("!.1,4GREEK(692.") -> "upper"

getCase(";;;;Outdoor28460....54 Activities?") -> "mixed"

getCase("0101,!;word9;20.518!") -> "lower"

Notes
Ignore characters that are not letters.
*/

/* My Solution */

function getCase(str) {
    if(/[A-Z]/.test(str) && /[a-z]/.test(str)){
       return "mixed";
   } else if(/[a-z]/.test(str)){
       return "lower";
   } return "upper";
}