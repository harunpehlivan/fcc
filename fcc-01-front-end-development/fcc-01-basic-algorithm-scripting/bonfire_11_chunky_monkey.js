function chunk(arr, size) {
    var newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
