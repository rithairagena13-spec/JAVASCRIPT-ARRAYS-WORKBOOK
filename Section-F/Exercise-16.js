const gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

// 1. Use nested loops to print every individual value
console.log("Printing all values:");
for (let row = 0; row < gameBoard.length; row++) {
  for (let col = 0; col < gameBoard[row].length; col++) {
    console.log(`Value at [${row}][${col}]:`, gameBoard[row][col]);
  }
}

// 2. Calculate and print the sum of all elements
let totalSum = 0;
for (let row = 0; row < gameBoard.length; row++) {
  for (let col = 0; col < gameBoard[row].length; col++) {
    totalSum += gameBoard[row][col];
  }
}
console.log("Total sum of matrix:", totalSum); // 1