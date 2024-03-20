/* Qs4. Write a JavaScript function to count 
    the number of vowels in a String argument.
 */

//..................................................................

let str = "Education";

function countVowels(str) {
  let copyStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      copyStr.charAt(i) == "a" ||
      copyStr.charAt(i) == "e" ||
      copyStr.charAt(i) == "i" ||
      copyStr.charAt(i) == "o" ||
      copyStr.charAt(i) == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str)); //14
