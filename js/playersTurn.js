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

const songPiece =() => {

    let audio = document.getElementById(`playAudio`)
    audio.play()
    // let changePieceAudio = document.createElement("audio")
    // changePieceAudio.src = "songs/SongPiece.mp3"
    // changePieceAudio.autoplay = true
    // document.getElementById("conteiner").appendChild(changePieceAudio)

}