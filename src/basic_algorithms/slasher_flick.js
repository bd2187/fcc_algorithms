/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/


function slasher(arr, howMany) {
  return arr.slice(howMany);
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5))
