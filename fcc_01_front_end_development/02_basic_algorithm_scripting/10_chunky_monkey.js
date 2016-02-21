/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
    var newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
