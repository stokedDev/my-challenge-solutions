/* Write a function that returns the nth Fibonacci number. */

/* My Solution */
function fibonacci(n){
	let fn = [0,1];
		for(let i = 1;i <= n/2;i++){
			fn[1] = fn[0] + fn[1];
			fn[0] = fn[0] + fn[1];
			if(i === n/2){
				return `${fn[0]}`;
			}
		}	
}