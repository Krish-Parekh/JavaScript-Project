var board = document.querySelectorAll(".board-box");
var boardContainer = document.querySelector(".board-container");
var resultText = document.querySelector(".result-text");
var resultContainer = document.querySelector(".result-container");
resultContainer.style.display = "none";

var boardBucket = {};
var playerToggle = false;
var currentPlayer;
board.forEach((box, idx) => {
  box.addEventListener("click", function () {
    handlePlayerMoves(box, idx);
  });
});

function handlePlayerMoves(box, idx) {
  if (playerToggle) {
    playerToggle = false;
    box.innerHTML = `<img src="images/cross.png" alt="cross.png" class="img-box">`;
    currentPlayer = "Player 2";
    boardBucket[idx] = currentPlayer;
  } else {
    playerToggle = true;
    box.innerHTML = `<img src="images/zero.png" alt="zero.png" class="img-box">`;
    currentPlayer = "Player 1";
    boardBucket[idx] = currentPlayer;
  }
  if (checkWins()) {
    resultContainer.style.display = "block";
    resultText.innerText = `${currentPlayer} wins!`;
    resetBoard();
    return;
  }
}

function checkWins() {
  switch (true) {
    case currentPlayer === boardBucket[0] &&
      currentPlayer === boardBucket[1] &&
      currentPlayer === boardBucket[2]:
      return true;

    case currentPlayer === boardBucket[3] &&
      currentPlayer === boardBucket[4] &&
      currentPlayer === boardBucket[5]:
      return true;

    case currentPlayer === boardBucket[6] &&
      currentPlayer === boardBucket[7] &&
      currentPlayer === boardBucket[8]:
      return true;

    case currentPlayer === boardBucket[0] &&
      currentPlayer === boardBucket[3] &&
      currentPlayer === boardBucket[6]:
      return true;

    case currentPlayer === boardBucket[1] &&
      currentPlayer === boardBucket[4] &&
      currentPlayer === boardBucket[7]:
      return true;

    case currentPlayer === boardBucket[2] &&
      currentPlayer === boardBucket[5] &&
      currentPlayer === boardBucket[8]:
      return true;

    case currentPlayer === boardBucket[0] &&
      currentPlayer === boardBucket[4] &&
      currentPlayer === boardBucket[8]:
      return true;

    case currentPlayer === boardBucket[2] &&
      currentPlayer === boardBucket[4] &&
      currentPlayer === boardBucket[6]:
      return true;

    case Object(boardBucket).length === 8:
      return true;
  }
}


function resetBoard() {
  board.forEach((box, idx) => {
    if(box.childNodes.length == 1){
      box.removeChild(box.childNodes[0]);
      boardBucket[idx] = "";
    }
  });
}