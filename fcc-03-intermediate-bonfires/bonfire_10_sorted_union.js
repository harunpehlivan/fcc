function unite(arr1, arr2, arr3) {
    var united = arr1;
    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (united.indexOf(arguments[i][j]) < 0) {
                united.push(arguments[i][j]);
            }
        }
    }
    return united;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
