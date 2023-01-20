const player_X_class = 'x'
const player_O_class = 'circulo'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const cells = document.querySelectorAll(".cell")
const tabla = document.querySelector(".tabla")
const ganador = document.querySelector("#ganador")
const restart = document.getElementById("restart")
let player_O_turn = false
start()
restart.addEventListener("click",start)
function start(){
    player_O_turn=false
   
    cells.forEach(cell=>{
        cell.classList.remove(player_O_class)
        cell.classList.remove(player_X_class)
        cell.removeEventListener("click",handleCellClick)
        cell.addEventListener("click",handleCellClick,{once:true})
        cell.style.cursor = "pointer"
        ganador.innerText = ""
    })
    setBoardHoverClass()
}

function handleCellClick(e){
    const celda = e.target
    const currentClass = player_O_turn ? player_O_class : player_X_class
    if(celda.style.cursor !== "not-allowed"){
        celda.classList.add(currentClass)
    }
    
    if(checkWin(currentClass)){
        finalizar(false)
    } else if( isdraw()){
        finalizar(true)
    }else{
        player_O_turn = !player_O_turn
        setBoardHoverClass()
    }

}

function finalizar(empat){
    if(empat){
        ganador.innerText = "Empate"
        cells.forEach(cell=>{
            cell.style.cursor = "not-allowed"
        })
    } else {
        ganador.innerText = `El jugador ${player_O_turn ? "circulo" : "X"} gana `
        
        cells.forEach(cell=>{
            cell.style.cursor = "not-allowed"
            
        })
    }
    ganador.classList.add('show')
}
function isdraw(){
    return [...cells].every(cell=>{
        return cell.classList.contains(player_X_class) || cell.classList.contains(player_O_class)
    })
}

function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cells[index].classList.contains(currentClass)
		})
	})
}
function setBoardHoverClass() {
	tabla.classList.remove(player_X_class)
	tabla.classList.remove(player_O_class)
	if (player_O_turn) {
		tabla.classList.add(player_O_class)
	} else {
		tabla.classList.add(player_X_class)
	}
}