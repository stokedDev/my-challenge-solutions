/* Opposite Address
Someone was walking through a straight street 
with exactly n identical home structures on both sides. 
Address numbers in the street look like this:

1 |   | 6

3 |   | 4

5 |   | 2
He noticed that even numbered addresses 
increase on the right while odd numbered 
addresses decrease on the left.

Create a function that takes an address number 
and length of the street n and returns the address 
number of the home across the street.

Examples
oppositeHouse(address, n)

oppositeHouse(1, 3) ➞ 6

oppositeHouse(2, 3) ➞ 5

oppositeHouse(3, 5) ➞ 8
*/

/* My Solution Is Below */

const oppositeAddress = (address, n) => address % 2 === 0? 2 * n - 1 - ( 2 * address / 2 ) + 2: ( 2 * n - address ) + 1;