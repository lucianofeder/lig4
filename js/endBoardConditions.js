const verifyHorizontal = () => {
    let ballPlayer1 = 1;
    let ballPlayer2 = 2;

    for (let i = 0; i < arrBoard.length; i++) {
        let player1 = 0;
        let player2 = 0;
        for (let j = 0; j < arrBoard[i].length; j++) {
        if (arrBoard[i][j] === ballPlayer1) {
            player1++;
            player2 = 0;
        }
        if (arrBoard[i][j] === ballPlayer2) {
            player2++;
            player1 = 0;
        }
        if (arrBoard[i][j] === 0) {
            player1 = 0;
            player2 = 0;
        }
        if (player1 + player2 === 4) {
            return player1 > player2 ? ballPlayer1 : ballPlayer2;
        }
        }
    }

    return 0
};


const verifyVertical = () => {
    let winner = 0
    let count = 0
    let j = playedColumn
    
  
    for (let i = 0; i < arrBoard.length; i++) {
        if (arrBoard[i][j] === playerTurn) {
            count++
        } else {
            count = 0
        }
        if (count === 4) {
            winner = playerTurn
            break
        }
    }
     
    return winner
}



const verifyDiagLeftToRight = () => {
    let maxDelta = 0

    if (playedColumn > playedLine) {
        maxDelta = playedLine
    } else {
        maxDelta = playedColumn
    }

    let i = playedLine - maxDelta
    let j = playedColumn - maxDelta
    let countPlayer = 0

    while (arrBoard[i][j]) {
        if (arrBoard[i][j] === playerTurn) {
            countPlayer++
        } else {
            countPlayer = 0
        }
        if (countPlayer === 4) {
            return playerTurn
            //return playerTurn
        }
        i++
        j++

        if (i >= arrBoard.length || j >= arrBoard[0].length) { // Apenas para nao dar erro quando estourar as dimensoes da Matris
            break
        }
    }
}


const verifyDiagRightToLeft = () => {
    let maxDelta = 0
    let lineLenght = arrBoard[0].length 

    if ((lineLenght - playedColumn) > playedLine) {
        maxDelta = playedLine
    } else {
        maxDelta = lineLenght - playedColumn
    }

    let i = playedLine - maxDelta
    let j = playedColumn + maxDelta
    let countPlayer = 0

    while (arrBoard[i][j]) {
        if (arrBoard[i][j] === playerTurn) {
            countPlayer++
        } else {
            countPlayer = 0
        }
        if (countPlayer === 4) {
            return playerTurn
            //return playerTurn
        }
        i++
        j--

        if (i >= arrBoard.length || j <= 0) { // Apenas para nao dar erro quando estourar as dimensoes da Matris
            break
        }
    }
}

const whoWon = () => {
    let won = 0

    if (verifyHorizontal()) {
        won = verifyHorizontal()

    } else if (verifyVertical()) {
        won = verifyVertical()

    } else if (verifyDiagLeftToRight()) {
        won = verifyDiagLeftToRight()

    } else {
        won = verifyDiagRightToLeft()
    }

    return won
}


const drawVerify = () => {
    for (let j = 0; j < arrBoard[0].length; j++) {
        if (arrBoard[0][j] === '_') {

            return false
        }
    }
    return true
}