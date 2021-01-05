let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let p = document.createElement("p")
p.setAttribute("id", "style")
player1.addEventListener("click", jogadaPlayer1)
player2 .addEventListener("click", jogadaPlayer2)


const jogadaPlayer1 = () => {
   
   p.innerHTML = "Vez do<br> Jogador 1"
   player1.appendChild(p)

}

const jogadaPlayer2 = () => { 
    p.innerHTML = "Vez do<br> Jogador 2"
    player2 .appendChild(p)
}

jogadaPlayer1()

// Quando clicar em "Você" ou "PC" irá alternar os jogadores para fazer sua jogada
// Por enquanto o "clique" não está dentro do board
// Mas quando clicar para fazer a jogada no board
// Irá alternar os jogador na parte de cima