function factorialize(num) {
    if (num < 0) {
        return "num must be > or = to 0";
    } else if (num < 2) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

factorialize(5);
