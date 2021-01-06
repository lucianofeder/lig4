const turnPlayer = () => {

    if(playerTurn===1){
    p.innerText = "PLAYER 1"
    turnRound.appendChild(p)
    }
    if(playerTurn===2){
     
     p.innerHTML = "PLAYER 2"
     turnRound.appendChild(p)
    }
 }

let turnRound = document.getElementById("turnRound")
let p = document.createElement("p")
p.innerText = "PLAYER 1"
p.setAttribute("id", "style")

turnRound.appendChild(p)


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