const popUp = (mensagem) => {
  document.getElementById("popUpWin").innerText = mensagem;
  document.getElementById("popUp").style.display = "block";
};

const restartGame = () => {
  let boardArea = document.getElementsByClassName("glass")[0];
  console.log(boardArea);
  boardArea.innerHTML = "";
  setBoard();
};
const buttonReset = document.getElementById("restartGame");
const buttonRestart = () => {
  restartGame();
  mainGame();
  document.getElementById("popUp").style.display = "none";
};
buttonReset.addEventListener("click", buttonRestart);
