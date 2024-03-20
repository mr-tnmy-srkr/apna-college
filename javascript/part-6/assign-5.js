/* 
Qs5. Write a JavaScript function to generate
a random number within a range (start,end). */

// ............................................................................

function generateRandom(start, end) {
  let diff = end - start + 1; // + 1 for including the end value
  return Math.floor(Math.random() * diff) + start;
}

let start = 100;
let end = 200;

console.log(generateRandom(start, end));
