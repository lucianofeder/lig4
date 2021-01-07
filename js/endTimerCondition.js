const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const updateTimer = async () => {
    let playerTime = 1
    while(!gameWon) {
        let playerTimeDiv = document.getElementById(`timerPlayer${playerTurn}`)
        playerTime = Number(playerTimeDiv.innerText)
        await sleep(1000)
        playerTime--
        if (playerTime < 10) {
            playerTimeDiv.innerText = `0${playerTime}`
        } else {
            playerTimeDiv.innerText = playerTime
        }
        if (playerTime === 0) {
            setPlayerTurn()
            popUp(`Vitoria do <span id="playerWon${playerTurn}">Player${playerTurn}</span> pelo Tempo`)
            updateScore(playerTurn)
            setPlayerTurn()
        }
    }
}