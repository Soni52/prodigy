<!DOCTYPE html>
<html>
<head>
  <style>
    .board {
      display: flex;
      flex-wrap: wrap;
      width: 120px;
    }
    .cell {
      width: 40px;
      height: 40px;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="board" onclick="cellClicked(event)">
    <div class="cell" id="cell0"></div>
    <div class="cell" id="cell1"></div>
    <div class="cell" id="cell2"></div>
    <div class="cell" id="cell3"></div>
    <div class="cell" id="cell4"></div>
    <div class="cell" id="cell5"></div>
    <div class="cell" id="cell6"></div>
    <div class="cell" id="cell7"></div>
    <div class="cell" id="cell8"></div>
  </div>

  <script>
    let currentPlayer = 'X';
    let cells = document.getElementsByClassName('cell');

    function cellClicked(event) {
      if (event.target.textContent === '') {
        event.target.textContent = currentPlayer;
        if (checkWin()) {
          alert(currentPlayer + ' wins!');
          resetBoard();
          return;
        }
        if (checkDraw()) {
          alert('It\'s a draw!');
          resetBoard();
          return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }

    function checkWin() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let pattern of winPatterns) {
        if (
          cells[pattern[0]].textContent &&
          cells[pattern[0]].textContent === cells[pattern[1]].textContent &&
          cells[pattern[1]].textContent === cells[pattern[2]].textContent
        ) {
          return true;
        }
      }
      return false;
    }

    function checkDraw() {
      for (let cell of cells) {
        if (cell.textContent === '') {
          return false;
        }
      }
      return true;
    }

    function resetBoard() {
      for (let cell of cells) {
        cell.textContent = '';
      }
      currentPlayer = 'X';
    }
  </script>
</body>
</html>
