/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
https://en.wikipedia.org/wiki/ROT13
*/

function rot13(encodedStr) {
    var codeArr = encodedStr.split("");
    var decodedArr = [];
    for (var i = 0; i < codeArr.length; i++) {
        if (codeArr[i].charCodeAt() >= 65 && codeArr[i].charCodeAt() <= 77) {
            decodedArr.push(String.fromCharCode(codeArr[i].charCodeAt() + 13));
        } else if (codeArr[i].charCodeAt() >= 78 && codeArr[i].charCodeAt() <= 90) {
            decodedArr.push(String.fromCharCode(codeArr[i].charCodeAt() - 13));
        } else {
            decodedArr.push(codeArr[i]);
        }
    }
    return decodedArr.join("");
}

rot13("SERR PBQR PNZC");
