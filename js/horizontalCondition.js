let arrBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const verifyHorizontal = () => {
  let bollPlayer1 = 1;
  let bollPlayer2 = 2;

  for (let i = 0; i < arrBoard.length; i++) {
    let player1 = 0;
    let player2 = 0;
    for (let j = 0; j < arrBoard[i].length; j++) {
      if (arrBoard[i][j] === bollPlayer1) {
        player1++;
        player2 = 0;
      }
      if (arrBoard[i][j] === bollPlayer2) {
        player2++;
        player1 = 0;
      }
      if (player1 + player2 === 4) {
        console.log("Você Ganhou!!");
      }
    }
  }
};
verifyHorizontal();
