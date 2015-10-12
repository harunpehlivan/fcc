function where(arr, num) {
    arr.sort(function(a,b) {
        return a - b;
    });
    var i = 0;
    while (arr[i] < num) {
        i++;
    }
    return i;
}

where([40, 60], 50);
