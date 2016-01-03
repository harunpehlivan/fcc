function destroyer(arr) {
    var arg = [];
    var newArr = [];
    for(var i = 1; i < arguments.length; i++) {
        arg.push(arguments[i]);
    }
    for (var j = 0; j < arr.length; j++) {
        if (arg.indexOf(arr[j]) < 0 ) {
            newArr.push(arr[j]);
        }
    }
    return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
