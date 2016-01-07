/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
    var i = Math.min.apply(null, arr) + 1;
    while (i < Math.max.apply(null, arr)) {
        arr.push(i);
        i++;
    }
    var sum = arr.reduce(function(a, b) {
        return a + b;
    });
    return sum;
}

sumAll([1, 4]);
