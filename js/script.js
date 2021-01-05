const setBoard = () => {
    let boardArea = document.querySelector('.glass')

    for(let i=0; i<7; i++){
        let column = document.createElement('div')
        column.id = 'column-'+i
        column.classList.add('column-modifier')
        boardArea.appendChild(column)
        
        for(let j=0; j<6; j++){
            let celArea = document.getElementById(column.id)
            let cel = document.createElement('div')
            cel.id = i+'-'+j
            cel.classList.add('cel-modifier')
            celArea.appendChild(cel)
        }
    }  
}

setBoard()

let vetorBoard = [
    [0,0,0,0,0,0,0],    //0 i
    [0,0,0,0,0,0,0],    //1
    [0,0,0,0,0,0,0],    //2
    [0,0,0,0,0,0,0],    //3
    [0,0,0,0,0,0,0],    //4
    [0,0,0,0,0,0,0]     //5
]

function validahorzontal() {
for (let i = 0; i < vetorBoard.length; i++) {
    let count1 = 0
    let count2 = 0
    for (let j = 0; j < vetorBoard[0].length; j++) {
        
        if (vetorBoard[i][j] === 1) {
            count1++
            count2 = 0
        }
        if (vetorBoard[i][j] === 2) {
            count1 = 0
            count2++
        }
    }
    if (count1 + count2 === 4) {
        break
    } 
    
}

}




