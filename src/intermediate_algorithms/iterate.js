/*
  Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function iterate(arr1, arr2) {
    const baz = [];
    const merp = arr1.filter(num => arr2.indexOf(num) === -1);

    for (let i = 0; i < merp.length; i++) {
        if (baz.indexOf(merp[i]) === -1) {
            baz.push(merp[i]);
        }
    }

    return baz;
}

function sym(...args) {
    const bar = [];
    const result = [];
    const [firstArr, secondArr] = args;
    const slicedArgs = args.slice(2);

    slicedArgs.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
            bar.push(arr[i]);
        }
    });

    const foo = [
        ...iterate(firstArr, secondArr),
        ...iterate(secondArr, firstArr)
    ];

    const okayFinal = [...iterate(bar, foo), ...iterate(foo, bar)];

    return bar.filter(function(num) {
        if (firstArr.indexOf(num) === -1 && secondArr.indexOf(num) === -1) {
            return num;
        }
    });

    // return okayFinal.sort();
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4])); // => [3, 4, 5]
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // => [1, 4, 5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // => [2, 3, 4, 6, 7].
