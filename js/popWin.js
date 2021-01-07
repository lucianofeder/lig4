const popUp = (mensagem) => {
  document.getElementById("popUpWin").innerHTML = mensagem;
  document.getElementById("popUp").style.display = "block";
  let conteinerDiv = document.getElementById("conteiner")
  conteinerDiv.style.display = "block";
  conteinerDiv.classList.remove('blur')
};

const highlightWinningCondition = () => {
  for (let i = 0; i < winningArr.length; i++) {
    let linha = winningArr[i][0]
    let coluna = winningArr[i][1]
    let winningDiv = document.getElementById(`${coluna}-${linha}`)
    if(playerTurn===1){
    winningDiv.classList.add(`winningBorderRed`)
    }
    if(playerTurn===2){
      winningDiv.classList.add(`winningBorderYellow`)
      }
  }
}

const resetArray = () => {
  for (let i = 0; i < arrBoard.length; i++) {
    for (let j = 0; j < arrBoard[i].length; j++) {
      arrBoard[i][j] = "_";
    }
  }
};

const resetTimer = () => {
  let player1TimeDiv = document.getElementById('timerPlayer1')
  let player2TimeDiv = document.getElementById('timerPlayer2')
  let time = player1TimeDiv.getAttribute('data-time')

  player1TimeDiv.innerText = time
  player2TimeDiv.innerText = time
}

const restartGame = () => {
  let boardArea = document.getElementsByClassName("glass")[0];
  boardArea.innerHTML = "";
  winningArr = []
  gameWon = false
  resetArray();
  setBoard();
  resetTimer();
};

const buttonReset = document.getElementById("restartButton");

const buttonRestart = () => {
  restartGame();
  mainGame();
  document.getElementById("popUp").style.display = "none";
  document.getElementById("conteiner").style.display = "none";
};
buttonReset.addEventListener("click", buttonRestart);
buttonReset.addEventListener('click', updateTimer)
