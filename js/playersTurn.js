let player1 = document.getElementById("player")
let bot = document.getElementById("bot")
let p = document.createElement("p")
p.setAttribute("id", "style")
player.addEventListener("click", jogadaPlayer1)
bot.addEventListener("click", jogadaPlayer2)
function jogadaPlayer1 () {
   
   p.innerHTML = "Vez do<br> Jogador 1"
   player.appendChild(p)

}
jogadaPlayer1()
function jogadaPlayer2 () {
    
    p.innerHTML = "Vez do<br> Jogador 2"
    bot.appendChild(p)
}

// Quando clicar em "Você" ou "PC" irá alternar os jogadores para fazer sua jogada
// Por enquanto o "clique" não está dentro do board
// Mas quando clicar para fazer a jogada no board
// Irá alternar os jogador na parte de cima