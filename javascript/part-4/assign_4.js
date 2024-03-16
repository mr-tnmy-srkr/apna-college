/* 
Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1
 */
// ......................................................................

let result;
const factorialFn = (num) => {
  if (num === 0 || num === 1) {
    return (result = 1);
  }
  if (num > 0) {
    return (result = num * factorialFn(num - 1));
  }
};
console.log(factorialFn(7)); //5040

// or

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);
