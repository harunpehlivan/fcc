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
