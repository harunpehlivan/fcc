function mutation(arr) {
    var j = 0;
    for (var i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) === -1) {
            j -= 1;
        } else {
            j += 1;
        }
    }
    if (j < arr[1].length) {
        return false;
    } else {
        return true;
    }
}

mutation(['hello', 'hey']);
