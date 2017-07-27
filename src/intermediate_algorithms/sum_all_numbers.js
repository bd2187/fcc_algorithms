/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/


function sumAll(arr) {
  const minNumber = Math.min(arr[0], arr[1]);
  const maxNumber = Math.max(arr[0], arr[1]);

  var arr = [];

  for (let i = minNumber; i <= maxNumber; i++) {
    arr.push(i);
  }

  return arr.reduce((prev, next) => {
    return prev + next;
  }, 0);
}

console.log(sumAll([5, 10]))
