/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace (str, before, after) {
  // check if 'before' is capitalized
  if (before.charCodeAt(0) === before.toUpperCase().charCodeAt(0)) {
    // if capitalized, capitalize 'after'
    let upperCaseAfter = after[0].toUpperCase() + after.slice(1);

    return str.replace(before, upperCaseAfter);
  }
  return str.replace(before, after);
}

console.log(myReplace("Let us go to the Store", "Store", "mall"))
