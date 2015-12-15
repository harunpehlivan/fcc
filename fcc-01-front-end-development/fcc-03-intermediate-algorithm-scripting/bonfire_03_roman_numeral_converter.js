function convert(num) {
    var naturalArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var romanStr = "";
    for (var i = 0; i < naturalArr.length; i++) {
        while (num >= naturalArr[i])  {
            romanStr += romanArr[i];
            num -= naturalArr[i];
        }
    }
    return romanStr;
}

convert(36);
