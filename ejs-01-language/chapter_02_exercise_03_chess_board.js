var size = 8;
var grid = "";
for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            grid += "#";
        } else {
            grid += " ";
        }
    }
    grid += "\n"
}
console.log(grid);
