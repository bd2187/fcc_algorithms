/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(function(num){
    if (arr2.indexOf(num) === -1) {
      newArr.push(num);
    }
  });

  arr2.forEach(function(num){
    if (arr1.indexOf(num) === -1) {
      newArr.push(num);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // = > 4


// *** Declarative Solution
function diffArray2(arr1, arr2) {
    return arr1.filter(function(el){
      return !arr2.includes(el);
    }) // []
    .concat(
      arr2.filter(function(el){
        return !arr1.includes(el);
      })
    );
}
