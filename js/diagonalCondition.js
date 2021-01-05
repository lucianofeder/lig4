let arrBoard = [
    ['_', '_', '_', '_', '_', '_', '_'],
    ['_', '_',  1 , '_',  1 , '_', '_'],
    ['_', '_', '_',  1 , '_', '_', '_'],
    ['_', '_',  1 , '_', '_', '_', '_'],
    ['_',  1 , '_', '_', '_',  1 , '_'],
    ['_', '_', '_', '_', '_', '_', '_'],
  ];

const diag1Verify = (linha, coluna) => {
    let maxDelta = coluna > linha ? linha : coluna
    let i = linha - maxDelta
    let j = coluna - maxDelta
    let countPlayer = 0

    while (arrBoard[i][j]) {
        if (arrBoard[i][j] === 1) {
            countPlayer++
        } else {
            countPlayer = 0
        }
        if (countPlayer === 4) {
            console.log(`Voce ganhou`)
        }
        i++
        j++

        if (i >= arrBoard.length || j >= arrBoard[0].length) {
            break
        }
    }
}

const diag2Verify = (linha, coluna) => {
    let maxDelta = 0
    let lineLenght = arrBoard[0].length 

    if ((lineLenght - coluna) > linha) {
        maxDelta = linha
    } else {
        maxDelta = lineLenght - colunas
    }

    let i = linha - maxDelta
    let j = coluna + maxDelta
    let countPlayer = 0

    while (arrBoard[i][j]) {
        if (arrBoard[i][j] === 1) {
            countPlayer++
        } else {
            countPlayer = 0
        }
        if (countPlayer === 4) {
            console.log(`Voce ganhou`)
        }
        i++
        j--

        if (i >= arrBoard.length || j <= 0) {
            break
        }
    }
}