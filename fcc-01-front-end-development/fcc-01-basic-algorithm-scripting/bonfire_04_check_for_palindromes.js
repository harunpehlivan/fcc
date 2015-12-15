function palindrome(str) {
    var rstr = str.split('').reverse().join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (rstr === str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')) {
        return true;
    } else {
        return false;
    }
}

palindrome("eye");
