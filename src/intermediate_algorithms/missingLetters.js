/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
  var arr = str.split('').map(function(letter){
    return letter.charCodeAt(0);
  });

  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length) return;
    if (arr[i] - arr[i - 1] != 1) return String.fromCharCode(arr[i] - 1);
  }
  return;
}

console.log(fearNotLetter("abcdf"));
