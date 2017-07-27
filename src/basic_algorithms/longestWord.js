/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


function findLongestWord(str) {
  var sentenceArr = str.split(' ').map(function(word){
    return word.length;
  });

  return Math.max.apply(null, sentenceArr);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
