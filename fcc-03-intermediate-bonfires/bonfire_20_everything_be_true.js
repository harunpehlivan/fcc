function every(collection, pre) {
    var j = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre)) {
            j += 1;
        }
    }
    if (j === collection.length) {
        return true;
    } else {
        return false;
    }
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
