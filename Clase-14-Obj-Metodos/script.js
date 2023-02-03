
// array de objetos
const productos = [
    {
        title: "moto g8",
        price: 9000,
        id: 1,
        marca:  "motorola",
        codigo: "x-2-1"
    },
    {
        title: "iphone 10",
        price: 3000,
        id: 2,
        marca: "apple"
    },
    
    {
        title: "samsung s20+",
        price: 2000000,
        id: 3,
        marca: "samsung",

    },
    {
        title: "moto g9",
        price: 10000,
        id: 4,
        marca:  "motorola"
    },
    {
        title: "moto g10",
        price: 19000,
        id: 5,
        marca:  "motorola"
    },
    {
        title: "iphone 11",
        price: 3000,
        id: 6,
        marca: "apple"
    },
    {
        title: "iphone 9",
        price: 3000,
        id: 2,
        marca: "apple"
    },
]

// aparezca por consola todos los nombres de los celulares

/* Metodo viejo
for(const producto of productos){
    console.log (producto.title)
}
*/
//callback es una funcion pasada por parametro


//como se usa hoy

//forEach recorre todo el array y realiza la accion pedida
productos.forEach((producto) => console.log ("el celula es: "+producto.title)) 

//filter para filtrar segun criterio, devuelve todos los resultados

const resultados = productos.filter((producto) =>  producto.marca == "motorola" && producto.price < 15000 )

if (resultados.length < 1){
    console.log ("No hay resultados de tu busqueda")
}else {
    console.log(resultados)
}

//ejemplo filter

const resultados2 = productos.filter( producto => producto.marca == "motorola")

console.log(resultados2.length + " coincidencias encontradas ")



//find retorna el primero que encuentra en array segun la condicion

console.log( productos.find(producto => producto.title=="moto g9") )



//some devuelve true si encuentra al menos un resultado

if (productos.some(producto => producto.price == 3001)){
    console.log("hay una coincidencia")
}else{
    console.log("no hay ninguna coincidencia")
}


// every - devuelve true si todos cumplen la condicion

console.log(productos.every(producto => producto.price > 1))


// findIndex - Devuelve en callback el indice del resultado

console.log(productos.findIndex(producto => producto.title == "moto g9"))

// map devuelve un array con el criterop

// si se hiciera con map pero innecesario
// const resultado = productos.map(producto => producto.price) 
let totalMercaderia = 0
//resultado.forEach(precio => totalMercaderia += precio) */

productos.forEach(producto => totalMercaderia += producto.price) 
console.log(totalMercaderia)




// toLowerCase() - minuscula
// toUpperCase() - mayusucula

//include - muestra todo lo que incluye el criterio

/* let stringBuscado = prompt("Realice su busqueda") */
let stringBuscado = "moto"
console.log(productos.filter(producto => producto.title.toUpperCase().includes(stringBuscado.toUpperCase())))


/* Crear un array de objetos de un tema de interes propio (personajes, productos, peliculas) */

//Elaborar un uso practico para FILTER, FIND, SOME

//Elaborar un filtrador de los productos por su precio

//Elabore un buscador de productos por su nombre de codigo

//Elabore un algoritmo que me dice si hay algun producto que supere los 10000

series = [
    {
        id: 1,
        nombre: "mindhunter",
        fecha: 2019-09-16,
        valoracion: 3
    },
    {
        id: 2,
        nombre: "dark",
        fecha: 2020-06-27,
        valoracion: 3
    },    
    {
        id: 3,
        nombre: "El Señor de los Anillos - Los Anillos de Poder",
        fecha: 2022-09-01,
        valoracion: 2
    }
]

//1
let valoracionPedida = 2
console.log(series.filter(serie => serie.valoracion==valoracionPedida))

//2
let idPedido = 2
console.log(series. find(serie => serie.id==idPedido))

//3

