/* localStorage.setItem("key", "dato")
   localStorage.getItem("key")
   localStorage.removeItem("key")
  para modificar localstorage data (se puede ver en aplication con F12)
  No permite guardar ni objetos ni arrays, solo strings

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


/* JSON

.stringify transforma en string un objeto o array

.parse transforma en json

*/

const productos = [
    {
    "title": "motorola g8+",
    "price": 3000,
    "gbDisponibles": 64
    }
]

// para guardar objetos o arrays usar stringify
localStorage.setItem("productos", JSON.stringify(productos))

//para obtener un array u objeto del localstorage se usa JSON.parse
JSON.parse(localStorage.getItem("productos"))


/* 
    Crear un carrito con un array de objetos que contenga 5 productos, guardar este carrito en el localStorage 

    y cada vez que se recarge la pagina, debera mostrarnos por consola el carrito, PERO DEBEMOS OBTENERLO DEL LOCAL STORAGE
*/

carrito = [
    {
        id : 1,
        nombre : "",
        precio : 15
    },
    {
        id : 2,
        nombre : "",
        precio : 15
    },
    {
        id : 3,
        nombre : "",
        precio : 15
    }
]