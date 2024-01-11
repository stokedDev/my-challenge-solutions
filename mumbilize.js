/* This challenge begun this morning between 7:30AM and 8:30AM of this day January 11, 2024; */

function mumbilizeStr(str){
	let resultStr = '';
	for(let i = 0; i < str.length; i++){
		for(let j = 0; j < i; j++){
			/* let curAndPrevLetter = []; */
			function upDifFirstChar(){
				
			}
			if(i === 0){
				resultStr += str[i].toUpperCase();
			}else if(i > 0 && str[i] === str[i - 1]){
				resultStr += str[i];
				/* Brute Force The Concise */
			}else if(str[i] !== str[i - 1]){
				resultStr += '-';
			}else if(str[i]){
				resultStr += str[i];
			}
		}
	}
	return resultStr;
}