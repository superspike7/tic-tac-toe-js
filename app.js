const gameBoard = ( () => {
  board = ['','','','','','','','',''];

  const setSquare = (pos, mark) => {
    board[pos] = mark;
  };

  const getSquare = (pos) => { return board[pos] };

  const getLine = (a,b,c) => {
    return [board[a], board[b], board[c]];
  };

  return {board, setSquare, getSquare, getLine};
})();

const Player = (name, piece) => {

  const getName = () => name;
  const getPiece = () => piece;


  return {getPiece, getName};

};

const gameController = () => {
  const winnerPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,8], [2,5,8], [0,4,8], [2,4,6]];
};

