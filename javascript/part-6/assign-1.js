/* Qs1. Write a JavaScript function that returns array 
         elements larger than a number */

// .......................................................................

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getElements(arr, num);      // 8
                            // 9
                            // 10
                            // 6
                            // 7
