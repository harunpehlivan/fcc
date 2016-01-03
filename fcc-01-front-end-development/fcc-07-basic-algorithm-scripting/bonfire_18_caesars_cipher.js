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
