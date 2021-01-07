const popUp = (mensagem) => {
  document.getElementById("popUpWin").innerText = mensagem;
  document.getElementById("popUp").style.display = "block";
  document.getElementById("conteiner").style.display = "block";
};

const highlightWinningCondition = () => {
  for (let i = 0; i < winningArr.length; i++) {
    let linha = winningArr[i][0]
    let coluna = winningArr[i][1]
    let winningDiv = document.getElementById(`${coluna}-${linha}`)
    winningDiv.classList.add(`winningBorder`)
  }
}

const resetArray = () => {
  for (let i = 0; i < arrBoard.length; i++) {
    for (let j = 0; j < arrBoard[i].length; j++) {
      arrBoard[i][j] = "_";
    }
  }
};

const restartGame = () => {
  let boardArea = document.getElementsByClassName("glass")[0];
  console.log(boardArea);
  boardArea.innerHTML = "";
  winningArr = []

  resetArray();
  setBoard();
};

const buttonReset = document.getElementById("restartGame");
const buttonRestart = () => {
  restartGame();
  mainGame();
  document.getElementById("popUp").style.display = "none";
  document.getElementById("conteiner").style.display = "none";
};
buttonReset.addEventListener("click", buttonRestart);
