/* Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6
 */

// ......................................................................

const number = 287152;
let copiedNumber = number;
let count = 0;

while (copiedNumber > 0) {
  count++;
  copiedNumber = Math.floor(copiedNumber / 10);
}
console.log(count); //6
