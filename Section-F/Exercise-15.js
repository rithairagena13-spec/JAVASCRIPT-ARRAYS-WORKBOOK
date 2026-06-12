// 1. Create a 3x3 matrix initialized with zeros
const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

// 2. Set the value at the center position (row 1, column 1) to 1
gameBoard[1][1] = 1;

// 3. Access and print the value in the top-right corner (row 0, column 2)
const topRightValue = gameBoard[0][2];
console.log("Top-right corner value:", topRightValue); // 0

// Print the updated board to see the layout
console.log("Updated Game Board:", gameBoard);