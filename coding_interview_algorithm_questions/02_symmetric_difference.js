/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
The resulting array must contain only unique values (no duplicates).
*/

function sym(){
  var args = Array.prototype.slice.call(arguments);
  function diff(arr1, arr2){
    var arr = [];
    arr1.forEach (function(item){
      if(arr2.indexOf(item) < 0 && arr.indexOf(item) < 0){
        arr.push(item);
      }
    });
    arr2.forEach(function(item){
      if(arr1.indexOf(item) < 0 && arr.indexOf(item) < 0){
        arr.push(item);
      }
    });
    return arr;
  }
  return args.reduce(diff);
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3, 3], [5, 2, 1, 4]);
sym([1, 2, 3], [5, 2, 1, 4, 5]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
