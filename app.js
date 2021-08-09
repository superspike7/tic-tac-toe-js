

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
  const winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  let playerNow = "X";
  let turns = 0;

  const playerSwitch = () => {
    if (playerNow === "X") {
      playerNow = "O"
    } else if (playerNow === "O") {
      playerNow = "X"
    };
  };

  const showWinner = (line, winner) => {
    let roundOver = document.querySelector('#round-over');
    let roundAnnounce = document.querySelector('#round-announce');
    if (line != undefined && winner) {
      line.forEach(i => {
        document.querySelector(`div[value="${i}"]`).classList.add(`text-${winner == "X" ? 'blue' : 'red'}-500`);
      });
      roundOver.classList.remove('hidden');
      roundAnnounce.innerHTML = `Winner:  <span class="text-4xl font-bold text-${winner == "X" ? 'blue' : 'red'}-500">${winner}</span>`;
    } else if (winner === "tie") {
      roundOver.classList.remove('hidden');
      roundAnnounce.textContent = "It's a Tie!";
    };
  };

  const checkWin = () => {
   let winner = false;
   let winningLine;
   winningPatterns.forEach(pattern => {
    let line = gameBoard.getLine(pattern).join("");
    if (line === "XXX") {
      winner = "X";
      winningLine = pattern;
    } else if (line === "OOO") {
      winner = "O";
      winningLine = pattern;
    } else if (turns > 7) {
      winner = "tie";
    };
   });
   
   showWinner(winningLine, winner);
   turns++;
   return winner;
  };

  const addMark = (e) => {
    let i = e.target.getAttribute('value');
    if (e.target.textContent === "") {
      e.target.classList.remove("cursor-pointer");
      gameBoard.setSquare(i, playerNow);
      playerSwitch();
      gameBoard.renderBoard();
      checkWin();
    };
  };

  return {checkWin, addMark};
})();

document.querySelectorAll('#sq').forEach(square => {
  square.addEventListener('click', gameController.addMark);
});
