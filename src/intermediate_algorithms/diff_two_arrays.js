/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  const combinedArrays = [...arr1, ...arr2];
  return combinedArrays.filter(function(number) {
    return arr1.indexOf(number) == -1 || arr2.indexOf(number) == -1
      ? number
      : null;
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // => 4
