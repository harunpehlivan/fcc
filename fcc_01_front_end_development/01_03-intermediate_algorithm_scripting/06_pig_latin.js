/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
http://en.wikipedia.org/wiki/Pig_Latin
*/

function translate(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var i = 0;
    while (vowels.indexOf(str.charAt(i)) < 0) {
        i++;
    }
    if (i > 0) {
        return str.substr(i) + str.substr(0, i) + "ay";
    } else {
        return str.substr(i) + "way";
    }
}

translate("consonant");
