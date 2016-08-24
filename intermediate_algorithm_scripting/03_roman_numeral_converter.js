/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
http://www.mathsisfun.com/roman-numerals.html
*/

function convertToRoman(num){
    var arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var romanStr = "";
    for(var i = 0; i < arr.length; i++){
        while(num >= arr[i])  {
            romanStr += romanArr[i];
            num -= arr[i];
        }
    }
    return romanStr;
}

convertToRoman(36);
convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(3999);
