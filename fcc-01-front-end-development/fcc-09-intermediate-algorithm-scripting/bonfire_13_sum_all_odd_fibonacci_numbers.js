/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
    var arr = [0, 1];
    for (var i = 0; arr[i] + arr[i + 1] <= num; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    arr = arr.filter(function(val) {
        return val % 2 === 1;
    });
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

sumFibs(4);
