/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
    var rstr = str.split('').reverse().join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (rstr === str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");
