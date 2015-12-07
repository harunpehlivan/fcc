function countChar(string, char) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == char) {
            counter += 1;
        }
    }
    return counter;
}
function countBs(string) {
    return countChar(string, "B");
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
