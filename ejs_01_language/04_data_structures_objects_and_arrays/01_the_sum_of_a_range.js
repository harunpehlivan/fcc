function range(start, end, step) {
    var arr = [];
    if (step === undefined) {
        step = 1;
    }
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (var j = start; j >= end; j += step) {
            arr.push(j);
        }
    }
    return arr;
}
function sum(array) {
    var num = 0;
    for (var i = 0; i < array.length; i++) {
        num += array[i];
    }
    return num;
}
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
