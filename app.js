const GameBoard = ( () => {
  board = [['','',''],
           ['','',''],
           ['','','']];

  const setSquare = (x, y, mark) => {
    board[x][y] = mark;
  };

  return {board, setSquare};
})();

const Player = (name, mark) => {

  const getName = () => name;
  const getMark = () => mark;


  return {getMark, getName};

};

