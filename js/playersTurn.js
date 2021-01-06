const turnPlayer = () => {

    if(playerTurn===1){
    turnRound.setAttribute("class", "fas fa-arrow-left")
    }
    if(playerTurn===2){
    turnRound.setAttribute("class", "fas fa-arrow-right")
  
    }
 }

let turnRound = document.getElementById("turnRound")
turnRound.setAttribute("class", "fas fa-arrow-left")


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