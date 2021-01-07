let arrBoard = [
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
];

let winningArr = []

let playedLine;
let playedColumn;
let playerTurn = 1;

setBoard();

const mainGame = () => {
  for (let j = 0; j < 7; j++) {
    let selectColumn = document.getElementById("column-" + j);

    selectColumn.addEventListener("click", (evt) => {
      for (let i = 5; i >= 0; i--) {
        let selectCel = document.getElementById(j + "-" + i);
        let searchChild = selectCel.querySelector("div");

        if (!searchChild) {
          let fillCel = document.createElement("div");
          selectCel.appendChild(fillCel);
          fillCel.classList.add(`player${playerTurn}Balls`);

          fillVector(i, j);
          if (whoWon()) {
            updateScore(playerTurn);
            popUp(`Parabens <span id="playerWon${playerTurn}">Player${playerTurn}</span> Voce Venceu`);
          }

          if (drawVerify()) {
            popUp(`O jogo EMPATOU`);
          }
          setPlayerTurn();
          songPiece();
          turnPlayer();
          break;
        }
      }
    });
  }
};

mainGame();
