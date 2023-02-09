
//DOM ES UNA INTERFACE: Document Object Model => type: objeto
//console.dir(document)

const tituloHTML = document.getElementById("titulo")

tituloHTML.innerText=""
for(let i=0; i<10 ; i++){
    tituloHTML.innerText += i
}


const contenedorHTML = document.getElementById("contenedor")

contenedorHTML.innerHTML = "<button> Boton </button>"

//Pedir nombre  - hacer titulo que diga Hola + nombre

let nombre=prompt("Ingrese nombre")

//contenedorHTML.innerHTML = "<h1>Hola "+nombre+ "</h1>"

contenedorHTML.innerHTML = `<h1>Hola ${nombre}</h1>`
