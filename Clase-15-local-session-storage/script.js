/* localStorage.setItem("key", "dato")
   localStorage.getItem("key")
   localStorage.removeItem("key")
  para modificar localstorage data (se puede ver en aplication con F12)

*/

/* if(localStorage.getItem("username")){
    let username = localStorage.getItem("username")
    alert("Hola "+username)
}else{
    let username = "Ariel"
    localStorage.setItem("username", username)
} */

//crear un programa que pida un tema, solo la 1era vez, al recargar mostrar por consola el tema seleccionado

if(localStorage.getItem("tema")){
    let tema = localStorage.getItem("tema") 
    document.getElementById("body").style.backgroundColor=tema
}else{
    let tema = prompt("Elegir tema black o white")
    localStorage.setItem("tema",tema)
    document.getElementById("body").style.backgroundColor=tema
}