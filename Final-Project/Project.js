// 1. Board Setup: Initialize a 3x3 matrix with empty strings
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

board[0][0] = "X";
board[1][1] = "O";

function checkWin(board, player) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }

  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

console.log("Did X win?:", checkWin(board, "X")); // false
console.log("Did O win?:", checkWin(board, "O")); // false

board[0][1] = "X";
board[0][2] = "X";
console.log("Did X win after moving to [0][1] and [0][2]?:", checkWin(board, "X")); // true