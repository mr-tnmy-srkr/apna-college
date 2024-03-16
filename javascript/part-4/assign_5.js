/* Qs5. Find the largest number in an array with only positive numbers.  */

//...........................................................................

let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for(let i=0; i<=arr.length; i++) {
if(largest < arr[i]) {
largest = arr[i];
}
}
console.log(largest); //10