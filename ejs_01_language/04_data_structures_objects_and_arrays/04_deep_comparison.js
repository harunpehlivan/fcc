function deepEqual(a, b) {
    for (var prop in a) {
        if ((typeof(a[prop]) == "object") && (a[prop] != null)) {
            if (!(deepEqual(a[prop], b[prop]))) {
                return false;
            }
        } else if (a[prop] != b[prop]) {
            return false;
        } else {
            return true;
        }
    }
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
