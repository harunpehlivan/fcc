/*
Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

var size = 8;
var grid = "";
for (var y = 1; y <= size; y++) {
    for (var x = 1; x <= size; x++) {
        if ((x + y) % 2 === 0) {
            grid += " ";
        } else {
            grid += "#";
        }
    }
    grid += "\n"
}
console.log(grid);
