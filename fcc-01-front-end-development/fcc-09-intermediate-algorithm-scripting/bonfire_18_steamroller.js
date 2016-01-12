/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamroller(arr) {
    var flat = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flat.concat(steamroller(arr[i]));
        } else {
            flat.push(arr[i]);
        }
    }
    return flat;
}

steamroller([1, [2], [3, [[4]]]]);
