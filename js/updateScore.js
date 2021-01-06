const updateScore = (player) => {
    let span = document.getElementById(`player${player}Score`)
    let number = Number(span.innerText)
    span.innerText = number + 1
}
