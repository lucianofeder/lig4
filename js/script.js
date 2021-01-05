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

let fillVector = (k,z) => {
    
    vetorBoard[z][k] = 'b'
            
}

for(let k=0; k<7;k++){
    let selectColumn = document.getElementById('column-'+k)

    selectColumn.addEventListener('click',(evt)=>{
        for(let z=5; z>=0; z--){
            let selectCel = document.getElementById(k+'-'+z)
            let searchChild = selectCel.querySelector('div')
            if(searchChild){
                console.log('Aqui já tem uma Bola! vou colocar na de cima')
            }else{
                let fillCel = document.createElement('div')
                selectCel.appendChild(fillCel)
                fillCel.classList.add('player1Balls')
                fillVector(k,z)
                console.log('k -' +k)
                console.log('z -' +z)
                console.log(vetorBoard)
                break
            }
        }
    })
}
