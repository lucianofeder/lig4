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
