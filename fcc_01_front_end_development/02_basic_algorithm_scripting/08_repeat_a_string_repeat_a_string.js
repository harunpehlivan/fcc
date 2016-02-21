/*
Repeat a given string (first argument) n times (second argument).
Return an empty string if n is a negative number.
*/

function repeat(str, num) {
    var arr = [];
    while(arr.length < num) {
        arr.push(str);
    }
    return arr.join('');
}

repeat('abc', 3);
