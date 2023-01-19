const display = document.querySelector(".display")
// display.innerText="aloo";
const operador = document.querySelector(".operador")
const valor = document.querySelector(".valor")
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")
const multi = document.getElementById("multipli")
const divi = document.getElementById("divi")
const igual = document.getElementById("igual")
const borrar = document.getElementById("borrar")

for(let i=0;i<=9;i++){
    document.getElementById("num"+i).addEventListener("click",presion)
}
function presion(e){
    display.innerText=display.innerText+e.target.innerText
}
igual.addEventListener("click",()=>{
    if(display.innerText===""){
        alert("Debe ingresar un valor")
    }else{
        switch (operador.innerText) {
            case "+" :
                display.innerText=(parseInt(valor.value)  +  parseInt(display.innerText))
                break;
            case "-":
                display.innerText=(parseInt(valor.value)  -  parseInt(display.innerText))
                break;
            case "*":
                display.innerText=(parseInt(valor.value)  *  parseInt(display.innerText))
                break;
            case "/":
                if(parseInt(display.innerText)===0){
                    alert("NO se puede divir sobre 0")
                }else{
                    display.innerText= (parseInt(valor.value)  /  parseInt(display.innerText)).toFixed(8)
                }
                break;
            default:
                alert("debe elegir un operador")
                break;
        }
    }
    
})
function limpiar(){
    valor.value = display.innerText
    display.innerText = ""
}
suma.addEventListener("click",()=>{
    operador.innerText = "+"
    limpiar();
})
resta.addEventListener("click",()=>{
    operador.innerText = "-"
    limpiar();
})
multi.addEventListener("click",()=>{
    operador.innerText = "*"
    limpiar();
})
divi.addEventListener("click",()=>{
    operador.innerText = "/"
    limpiar();
})
borrar.addEventListener("click",()=>{
    console.log("omeee")
    valor.value = "";
    // valor[0].value ="";
    display.innerText = "";
    operador.innerText ="."
})