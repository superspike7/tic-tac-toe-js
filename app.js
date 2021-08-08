

const gameBoard = ( () => {
  let board = ['','','','','','','','',''];

  const setSquare = (pos, mark) => {
    board[pos] = mark;
  };

  const getSquare = (pos) => { return board[pos] };

  const getLine = (arr) => {
    return [board[arr[0]], board[arr[1]], board[arr[2]] ];
  };

  const renderBoard = () => {
    let docBoard = document.querySelectorAll('#sq');
    docBoard.forEach( (square, i) => {
      square.textContent = gameBoard.board[i];
    });
  };


  return {board, setSquare, getSquare, getLine, renderBoard};
})();

const Player = (name, piece) => {

  const getName = () => name;
  const getPiece = () => piece;


  return {getPiece, getName};

};

const gameController = ( () => {
  const winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,8], [2,5,8], [0,4,8], [2,4,6]];
  let playerNow = "X";


  const playerSwitch = () => {
    if (playerNow === "X") {
      playerNow = "O"
    } else if (playerNow === "O") {
      playerNow = "X"
    };
  };

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

  const addMark = (e) => {
    let i = e.target.getAttribute('value');
    if (e.target.textContent === "") {
      e.target.classList.remove("cursor-pointer");
      gameBoard.setSquare(i, playerNow);
      playerSwitch();
      gameBoard.renderBoard();
    };
  };

  return {checkWin, addMark};
})();

document.querySelectorAll('#sq').forEach(square => {
  square.addEventListener('click', gameController.addMark);
});
