/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.
*/

function every(collection, pre) {
    var count = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].hasOwnProperty(pre) && !!collection[i][pre]) {
            count += 1;
        }
    }
    if (count === collection.length) {
        return true;
    } else {
        return false;
    }
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
