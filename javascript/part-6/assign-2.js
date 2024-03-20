/* Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abdcefgh” */

// ....................................................................................

let str = "abcdabcdefgggh";

function extractUniqueChar(str) {
  let ans = "";
  for (let index = 0; index < str.length; index++) {
    const currentChar = str[index];
    if (ans.indexOf(currentChar) == -1) {
      ans += currentChar;
    }
  }
  return `Answer = ${ans}`;
}
console.log(extractUniqueChar(str)); // Answer = abcdefgh
