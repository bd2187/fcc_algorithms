/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

//charCodeAt()
//fromCharCode()

function rot13(str) {
  return str.split('').map(function(letter){
    const utfCode = letter.charCodeAt(0);
    if (utfCode <= 90 && utfCode >= 65) {
      return (utfCode + 13) > 90
              ? String.fromCharCode( 64 + (13 - (90 - utfCode)) )
              : String.fromCharCode(utfCode + 13)
    }
    return letter;
  }).join('');
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"))
