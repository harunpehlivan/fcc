/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
Return the rest of the array, otherwise return an empty array.
*/

function drop(arr, func) {
    while (!func(arr[0])) {
        arr.shift();
    }
    return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
