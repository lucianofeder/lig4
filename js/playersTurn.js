const turnPlayer = () => {

    if(playerTurn===1){
        arrowDirection.setAttribute("class", "fas fa-arrow-left fixed-arrow") 
        player1Balls.setAttribute("class", "headerBall player1Balls rotate-arrow-ball") 
        player2Balls.setAttribute("class", "headerBall player2Balls")
    }
    if(playerTurn===2){
        arrowDirection.setAttribute("class", "fas fa-arrow-left rotate-arrow-ball")
        player2Balls.setAttribute("class", "headerBall player2Balls rotate-arrow-ball")
        player1Balls.setAttribute("class", "headerBall player1Balls")
  
    }
 }

let arrowDirection = document.querySelector(".fa-arrow-left")
let player1Balls = document.querySelector(".player1Balls")
let player2Balls = document.querySelector(".player2Balls")


const setPlayerTurn = () => {
    if (playerTurn === 1) {
        playerTurn = 2
    } else {
        playerTurn = 1
    }
}

// Quando clicar em "Você" ou "PC" irá alternar os jogadores para fazer sua jogada
// Por enquanto o "clique" não está dentro do board
// Mas quando clicar para fazer a jogada no board
// Irá alternar os jogador na parte de cima