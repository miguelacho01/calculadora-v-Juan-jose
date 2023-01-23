if(localStorage.getItem("token") !== "Miguel"){
    alert( "No autorizo")
    location="./index.html"
}
console.log(localStorage.token)
console.log(localStorage.getItem("token"))
const logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
    
    localStorage.removeItem("token")
    alert("chao")
    location="./index.html"
})