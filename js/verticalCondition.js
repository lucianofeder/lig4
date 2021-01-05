

const verticalCondition = () => {
    let winner = ""
    let player1Victory = 0
    let player2Victory = 0
    
    for (let i=0; i<vetorBoard[0].length; i++) {

    for (let j=0; j<vetorBoard.length; j++) {
       
        console.log(vetorBoard[j][i])
        if (vetorBoard[j][i]===1) {
        player1Victory++

        if (player1Victory===4) {
            winner = "Player 1"
            break;
        }
        if (vetorBoard[j+1][i]!==1){
            player1Victory = 0
        }
    }
    if (vetorBoard[j][i]===2) {
        player2Victory++

        if (player2Victory===4) {
            winner = "Player 2"
            break;
        }
        if (vetorBoard[j+1][i]!==2){
            player2Victory = 0
        }
    }
           
    }
    if (winner!=="") {
        break;
    
    }
    }   
   
//Possivel saida para a condição de vitória na vertical = winner !== ""
//Fazer uma interação para fim de jogo com a vitória
if (winner!=="") {

}
//Pode reaproveitar a variavel e concatenar a variavel na hora da vitória
//Exemplo: Criar uma DIV de vitória : " Parabens: Vitória do !${winner}"

}
 