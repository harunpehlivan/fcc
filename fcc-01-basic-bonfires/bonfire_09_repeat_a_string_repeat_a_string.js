function repeat(str, num) {
    var arr = [];
    while(arr.length < num) {
        arr.push(str);
    }
    return arr.join('');
}

repeat('abc', 3);
