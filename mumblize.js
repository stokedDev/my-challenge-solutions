
/* Create a function that takes a string and 
modifies the given string as per the below examples:*/
/*
* mumblize("AbCd") ➞ "A-Bb-Ccc-Dddd"
* mumblize("waLkeR") ➞ "W-Aa-Lll-Kkkk-Eeeee-Rrrrrr"
* mumblize('basEbalL') ➞ "B-Aa-Sss-Eeee-Bbbbb-Aaaaaa-Lllllll-Llllllll"
*/
/* My Solution */
function mumblize(str) {
	return [...str].map((el,i) => `${[...el[0].toUpperCase()]
	.concat(el.toLowerCase().repeat(i)).join('')}`).join('-');
}