/*

Find Pair That Has Certain Product
Write an algorithm that finds 
the first pair of elements of 
the array argument whose product 
is the argument n.

If there is no pair, return null.

Examples
simplePair([1, 2, 5], 5) ➞ [1, 3]

simplePair([1, 2, 4], 8) ➞ [2, 4]

simplePair([1, 4, 7], 11) ➞ null

*/

/* My Solution */

function simplePair(arr, n) {
	const resultArr = [];
		for(let i = 0; i < arr.length; i++){
			for(let q = 0; q < arr.length; q++){
				if(arr[i] * arr[q] === n && i !== q && !resultArr.length){
					resultArr.push([arr[i], arr[q]]);
				} 	
			}
		}
  const sortedResultsFlatArr = resultArr.sort((a,b)=>a-b).flat();
	return sortedResultsFlatArr.length? sortedResultsFlatArr: null;
}