/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  return arr.filter((val) => Boolean(val))
}

console.log(bouncer([7, "ate", "", false, 9]))
