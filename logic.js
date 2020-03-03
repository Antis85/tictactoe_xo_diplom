let players = ['x', 'o'];
let activePlayer = 0;
let boardxo = [];


function startGame() {
  //инициализация доски:
  let boardSize = prompt('Введите размер доски', 3);
  for (let i = 0; i < boardSize; i++) {
    let boardRow = [];
    boardxo[i] = boardRow;
    for (let j = 0; j < boardSize; j++) {
      boardRow[j] = '';
    }
  }

  renderBoard(boardxo);

  //выбор игрока:
  let binaryRnd = Math.random();
  if (binaryRnd < 1 / 2) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
  alert('Стартуем! Ходит игрок №' + (activePlayer + 1) + ': ' + players[activePlayer]);
}


function click(row, col) {
  boardxo[row][col] = players[activePlayer];
  renderBoard(boardxo);

  //проверка на победу:
  let x = players[activePlayer];
  let countRow = 0;
  let countCol = 0;
  for (let i = 0; i < boardxo.length; i++) {
    countRow = 0;
    countCol = 0;
    for (let j = 0; j < boardxo.length - 1; j++) {
      if (x == boardxo[i][j] && x == boardxo[i][j + 1] && countRow < boardxo.length - 1) {
        countRow++;
        if (countRow == boardxo.length - 1) {
          showWinner(activePlayer);
          countRow = 0;
        }
      } else {
        countRow = 0;
      }

      if (x == boardxo[j][i] && x == boardxo[j + 1][i] && countCol < boardxo.length - 1) {
        countCol++;
        if (countCol == boardxo.length - 1) {
          showWinner(activePlayer);
        }
      } else {
        countCol = 0;
      }
    }
  }

  let countDiag1 = 0;
  let countDiag2 = 0;
  for (let i = 0; i < boardxo.length - 1; i++) {
    if (x == boardxo[i][i] && x == boardxo[i + 1][i + 1] && countDiag1 < boardxo.length - 1) {
      countDiag1++;
      if (countDiag1 == boardxo.length - 1) {
        showWinner(activePlayer);
      }
    } else {
      countDiag1 = 0;
    }

    if (x == boardxo[i][boardxo.length - 1 - i] && x == boardxo[i + 1][boardxo.length - 1 - (i + 1)] && countDiag2 < boardxo.length - 1) {
      countDiag2++;
      if (countDiag2 == boardxo.length - 1) {
        showWinner(activePlayer);
      }
    } else {
      countDiag2 = 0;
    }
  }

  //смена игрока:
  if (activePlayer) {
    activePlayer = 0;
  } else activePlayer = 1;
  alert('Следующий ходит игрок№' + (activePlayer + 1) + ': ' + players[activePlayer]);
}
