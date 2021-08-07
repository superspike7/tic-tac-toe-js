const gameBoard = ( () => {
  board = ['','','','','','','','',''];

  const setSquare = (pos, mark) => {
    board[pos] = mark;
  };

  const getSquare = (pos) => { return board[pos] };

  const getLine = (arr) => {
    return [board[arr[0]], board[arr[1]], board[arr[2]] ];
  };

  return {board, setSquare, getSquare, getLine};
})();

const Player = (name, piece) => {

  const getName = () => name;
  const getPiece = () => piece;


  return {getPiece, getName};

};

const gameController = ( () => {
  const winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,8], [2,5,8], [0,4,8], [2,4,6]];

  const checkWin = () => {
   let winner = false;
   winningPatterns.forEach(pattern => {
    let line = gameBoard.getLine(pattern).join("");
    if (line === "XXX") {
      winner = "X";
    } else if (line === "OOO") {
      winner = "O";
    }
   });
   return winner;
  };

  return {checkWin};
})();

