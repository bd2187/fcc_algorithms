/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/


function uniteUnique(arr, ...args) {
  const combinedArgs = args.reduce( function(prevArr, nextArr){
    return [...prevArr, ...nextArr];
  }, [] );

  return arr.concat(
    combinedArgs.filter( function(num){
      return arr.indexOf(num) === -1 ? num : null;
    } )
  )
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
