const popUp = (mensagem) => {
  document.getElementById("popUpWin").innerText = mensagem;
  document.getElementById("popUp").style.display = "block";
};

const resetArray = () => {
  for (let i = 0; i < arrBoard.length; i++) {
    for (let j = 0; j < arrBoard[i].length; j++) {
      arrBoard[i][j] = '_'
    }
  }
}

const restartGame = () => {
  let boardArea = document.getElementsByClassName("glass")[0];
  console.log(boardArea);
  boardArea.innerHTML = "";

  resetArray()
  setBoard();
};

const buttonReset = document.getElementById("restartGame");
const buttonRestart = () => {
  restartGame();
  mainGame();
  document.getElementById("popUp").style.display = "none";
};
buttonReset.addEventListener("click", buttonRestart);
