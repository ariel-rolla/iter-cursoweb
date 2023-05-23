/*Al buscar en array conviene pasarlo a mayuscula o minuscula (solo para la busqueda)
nombre
nombre.toLowerCase()  - minuscula
nombre.toUpperCase()  - mayusucula
*/


/* Devuelve un array de un objeto y la cantidad  
Object.keys(usuario).length 

*/

/* se puede cambiar las propiedades o atributos en const pero no puedo cambiar el tipo (objeto) */
const usuario = {
    nombre:"pepe",
    apellido:"suarez",
    edad:28,
    tieneAmigos:true,
    amigo: {
        nombre: "juan",
        apellido:"perez",
        edad:39
    }
}

const saludar = (persona) => {
    console.log("Hola "+persona.nombre+" "+persona.apellido)
}

const producto = {
    nombre: "pepsi",
    precio: "400"
}

const cuantoSale = (producto) => {
    console.log("El producto "+producto.nombre+" cuesta $"+producto.precio)
}

/* Array */

frutas = ["manzana", "banana", "pera", "kiwi", "sandia","mango"]

/*  frutas.push("algo") - agrega un elemento al final
    frutas.unshift("algo") - agrega al principio
    frutas.pop() - elimina el ultimo
    frutas.shift() - elimina el 1ero
    frutas.indexOf("banana") - devuelve el indice de ese elemento
    frutas.splice(indice2porejemplo,cuantosAeliminar) - eliminar desde un indice y cuantos
    frutas.splice(frutas.indexOf("pera"),0,"QUEAGREGAR") - Splice pero sin borrar y agregando otro
    frutas.include("algo") - si existe algo en el array
*/

//Dado el array frutas agregar melon al principio del array, eliminar al anterior de pera y agregar entre sandia y mango una manzana

frutas.unshift("melon")

let indicePera = frutas.indexOf("pera")
frutas.splice(indicePera-1, 1)

frutas.splice(frutas.indexOf("mango"),0,"manzana")



//Dado el array nombres, eliminar pepe y a lucia y en su lugar poner lucas y carlitos

const nombres = ["juan", "pepe", "lucia", "maria"]

nombres.splice(nombres.indexOf("pepe"),2,"lucas","carlitos")

//si existe una pera en el array de frutas hacer un condicional que ejecute un mensaje por consola "tenemos pera" en caso de estar, sino que ejecute por consola un "no hay pera"

if(frutas.includes("pera")){
    console.log("Tenemos pera")
}else{
    console.log("No hay pera")
}


// for en array - recorrer array

/* for (let i=0; i < frutas.length; i++){
    console.log(frutas[i])
} */

//For...of solo para Arrays
for(let fruta of frutas){
    console.log(fruta)
}



const productos = [
    {
        name: "nokia 1100",
        precio: 700000
    },
    {
        name: "motorola G8",
        precio: 10
    },
    {
        name: "iphone 10",
        precio: 1000
    }
]

for (const producto of productos){
    console.log(celular.name + " cuesta: $" + celular.precio)
}