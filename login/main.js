const login=document.getElementById("btn")
login.addEventListener("click",e=>{

    e.preventDefault()
    const username=document.getElementById("username").value
    const password=document.getElementById("password").value
    if(username==="" || password==="") alert("no se indico el usuario o contraseña")

    if(username==="Miguel" && password==="password"){
        localStorage.token = "Miguel"
        alert("Bienvenido")
        setTimeout(()=>{
            location="./page1.html"
        },1000)
    }else{
        alert("Usuario o contraseña no valido")
    }
    
})



document.getElementById("password").addEventListener("mouseenter",show)
function show(){
    document.getElementById("password").type="text"
}
document.getElementById("password").addEventListener("mouseleave",hide)
function hide(){
    document.getElementById("password").type ="password"
}
