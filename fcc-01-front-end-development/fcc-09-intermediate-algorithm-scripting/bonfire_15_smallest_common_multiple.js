function smallestCommons(arr) {
    var range = [];
    for (var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
        range.push(i);
    }
    return range.reduce(lcm);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

smallestCommons([1,5]);
