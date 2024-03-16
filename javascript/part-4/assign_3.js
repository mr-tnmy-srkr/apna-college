/* Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25
 */
// ....................................................................

const number = 287152;

let copiedNumber = number;
let sum = 0;

while (copiedNumber > 0) {
  const remainder = copiedNumber % 10;
  const quotient = copiedNumber / 10;
  sum += remainder;
  copiedNumber = Math.floor(quotient);
}
console.log(sum); //25
