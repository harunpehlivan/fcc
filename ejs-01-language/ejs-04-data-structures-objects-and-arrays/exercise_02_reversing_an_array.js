function reverseArray(array) {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}
function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var oldArr = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = oldArr;
    }
    return array;
}
console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
