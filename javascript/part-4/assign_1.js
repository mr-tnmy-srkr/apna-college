/* Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */
// ..........................................................................
const arr = [1, 2, 3, 4, 5, 6, 2, 3];
const num = 2;
const result = [];

for (let index = 0; index < arr.length; index++) {
  if (arr[index] !== num) {
    result.push(arr[index]);
  }
}
console.log(result); // [1, 3, 4, 5, 6, 3]

// or

let array = [1, 2, 3, 4, 5, 6, 2, 3];
let number = 2;
for (let i = 0; i < arr.length; i++) {
  if (array[i] == number) {
    array.splice(i, 1);
  }
}
console.log(array); // [ 1, 3, 4, 5, 6, 3 ]
