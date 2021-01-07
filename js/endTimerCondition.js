const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const updateTimer = async () => {
    let playerTime = 1
    while(playerTime > 0) {
        let playerTimeDiv = document.getElementById(`timerPlayer${playerTurn}`)
        playerTime = Number(playerTimeDiv.innerText)
        await sleep(1000)
        playerTime--
        playerTimeDiv.innerText = playerTime
        if (playerTime === 0) {
            popUp(`O tempo do <span id="playerWon${playerTurn}">Player${playerTurn}</span> ESGOTOU`)
            setPlayerTurn()
            updateScore(playerTurn)
            setPlayerTurn()
        }
    }
}