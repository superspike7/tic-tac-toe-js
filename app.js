const GameBoard = ( () => {
  board = [['','',''],
           ['','',''],
           ['','','']];


  return {board,};
})();

const Player = (name, mark) => {

  const getName = () => name;
  const getMark = () => mark;


  return {getMark, getName};

};
