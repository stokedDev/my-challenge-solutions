/* Write a function that returns the nth Fibonacci number. */

/* My Solution */
function fibonacci(n) {
	const fibonacciArr = [0n,1n];
	for(let i = 1; i <= n; i++){
		fibonacciArr[1] = fibonacciArr[0] + fibonacciArr[1];
		fibonacciArr[0] = fibonacciArr[0] + fibonacciArr[1];
		if(i === n/2){
		const nthFibonacci = `${fibonacciArr[0]}`;
		return nthFibonacci;
		}
	}
}