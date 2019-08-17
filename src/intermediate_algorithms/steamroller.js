/*
    Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr, flattened_arr) {
    var arr_2 = flattened_arr ? flattened_arr : [];
    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i])
            ? steamrollArray(arr[i], arr_2)
            : arr_2.push(arr[i]);
    }

    return arr_2;
}

console.log(steamrollArray([1, [2], [3, [[4], 6], 5]]));
