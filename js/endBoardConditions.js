const verifyHorizontal = () => {
    let tempWinningArr = []

    for (let i = 0; i < arrBoard.length; i++) {
        let count = 0
        for (let j = 0; j < arrBoard[i].length; j++) {
        if (arrBoard[i][j] === playerTurn) {
            count++;
            tempWinningArr.push([i,j])
        }else{
            count = 0
            tempWinningArr = []
        }
        if (count === 4) {
            winningArr = tempWinningArr
            return playerTurn;
        }
        }
    }
    return 0
};


const verifyVertical = () => {
    let winner = 0
    let count = 0
    let j = playedColumn
    let tempWinningArr = []
    
  
    for (let i = 0; i < arrBoard.length; i++) {
        if (arrBoard[i][j] === playerTurn) {
            count++
            tempWinningArr.push([i,j])
        } else {
            count = 0
            tempWinningArr = []
        }
        if (count === 4) {
            winner = playerTurn
            winningArr = tempWinningArr
            break
        }
    }
     
    return winner
}



const verifyDiagLeftToRight = () => {
    let maxDelta = 0
    let tempWinningArr = []

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
            tempWinningArr.push([i,j])
        } else {
            countPlayer = 0
            tempWinningArr = []
        }
        if (countPlayer === 4) {
            winningArr = tempWinningArr
            return playerTurn
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
    let lineLenght = arrBoard[0].length -1
    let tempWinningArr = []

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
            tempWinningArr.push([i,j])
        } else {
            countPlayer = 0
            tempWinningArr = []
        }
        if (countPlayer === 4) {
            winningArr = tempWinningArr
            return playerTurn
            //return playerTurn
        }
        i++
        j--

        if (i >= arrBoard.length || j < 0) { // Apenas para nao dar erro quando estourar as dimensoes da Matris
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
    highlightWinningCondition()

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