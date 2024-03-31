/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
  # # # #
# # # #
  # # # #
# # # #
  # # # #
# # # #
  # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size , outputting a grid
of the given width and height.*/
let row = "# # # #";
let board = "";
/*
for (let i = 1; i < 9; i++) {
  if (i % 2 == 0) {
    console.log(row);
    board = board + row + "\n";
  }else {
    console.log(" " + row);
    board = board + " " + row + "\n";
  }
}
console.log();
console.log(board);
*/
let binding_size = 7;
let low = "";
//Create row
for (let i = 1; i <= binding_size; i++) {
  if (i % 2 == 0) {
    low += " ";
  }else {
    low += "#";
  }
}
//Create chessboard
for (let i = 1; i <= binding_size; i++) {
  if (i % 2 == 0) {
    //console.log(low);
    board = board + low + "\n";
  }else {
    //console.log(" " + low);
    board = board + " " + low + "\n";
  }
}
console.log(low);
console.log("\n");
console.log(board);
