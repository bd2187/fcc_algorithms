/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/



function translatePigLatin(str) {
  var strArr = str.split('');
  var vowelCheck = /^[aeiou]$/i;

  if ( vowelCheck.test(strArr[0]) ) return `${str}way`;

  var counter = 0;
  for (let i = 0; i < strArr.length; i++) {
    if ( !vowelCheck.test(strArr[i]) ) {
      counter++
    }
    else {
      i = strArr.length;
    }
  }
  return str.slice(counter) + str.substring(0, counter) + 'ay';
}

console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("eight"))
