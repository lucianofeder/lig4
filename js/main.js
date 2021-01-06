let arrBoard = [
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
];

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
            popUp();
            document.getElementById(
              "popUpWin"
            ).innerText = `Parabens Player${playerTurn} Voce Venceu`;
          }

          if (drawVerify()) {
            console.log(`O jogo EMPATOU`);
          }
          setPlayerTurn();
          break;
        }
      }
    });
  }
};

mainGame();
