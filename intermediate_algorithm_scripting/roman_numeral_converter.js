/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
http://www.mathsisfun.com/roman-numerals.html
*/

function convert(num) {
    var arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var romanStr = "";
    for (var i = 0; i < arr.length; i++) {
        while (num >= arr[i])  {
            romanStr += romanArr[i];
            num -= arr[i];
        }
    }
    return romanStr;
}

convert(36);
