/* Write a function that returns the nth Fibonacci number. */

/* My Solution */
function fibonacci(n) {
	const fibonacciArr = [0n,1n];
	for(let i = 2; i <= n; i++){
		fibonacciArr.push(fibonacciArr[0] + fibonacciArr[1]);
		fibonacciArr.shift();
		}
	return `${fibonacciArr[1]}`;
}