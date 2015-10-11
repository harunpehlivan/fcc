function titleCase(str) {
    var arr = str.toLowerCase().split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join(' ');
}

titleCase("I'm a little tea pot");
