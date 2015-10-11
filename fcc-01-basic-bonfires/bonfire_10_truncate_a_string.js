function truncate(str, num) {
    if (str.length > num) {
        var tstr = str.slice(0, num - 3) + '...';
        return tstr;
    } else {
        return str;
    }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
