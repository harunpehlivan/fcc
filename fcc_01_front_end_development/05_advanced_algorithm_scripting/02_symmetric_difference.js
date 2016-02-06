/*
Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.
*/

function sym() {
    var args = Array.prototype.slice.call(arguments);
    function diff(arr1, arr2) {
        var arr = [];
        arr1.forEach (function(item) {
            if (arr2.indexOf(item) < 0 && arr.indexOf(item) < 0) {
        arr.push(item);
      }
    });
    arr2.forEach(function(item) {
      if (arr1.indexOf(item) < 0 && arr.indexOf(item) < 0) {
        arr.push(item);
      }
    });
    return arr;
  }
  return args.reduce(diff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
