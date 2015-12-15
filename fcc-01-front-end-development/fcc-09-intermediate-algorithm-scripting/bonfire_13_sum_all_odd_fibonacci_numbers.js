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
