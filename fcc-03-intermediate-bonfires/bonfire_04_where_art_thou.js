function where(collection, source) {
    var arr = Object.keys(source);
    return collection.filter(function (obj) {
        for (var i = 0; i < arr.length; i++) {
            if (obj[arr[i]] !== source[arr[i]]) {
                return false;
            }
        }
        return true;
    });
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
