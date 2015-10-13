function sumPrimes(num) {
    var sum = [];
    for (var i = 0; i <= num; i++) {
        if (isPrime(i)) {
            sum.push(i);
        }
    }
    return sum.reduce(function(a, b) {
        return a + b;
    });
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(10);
