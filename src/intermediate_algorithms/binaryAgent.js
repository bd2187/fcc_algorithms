/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {
    // split the str into an array with each space
    var arr = str.split(" ");

    // itreate through each item in the array and return the text version of the binary code

    return arr
        .map(function(binary) {
            return String.fromCharCode(parseInt(binary, 2));
        })
        .join("");
}

console.warn(
    binaryAgent(
        "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
);
