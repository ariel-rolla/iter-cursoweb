
// array de objetos
const productos = [
    {
        title: "moto g8",
        price: 9000,
        id: 1,
        marca: "motorola"
    },
    {
        title: "IPHONE 10",
        price: 3000,
        id: 2,
        marca: "apple"
    },
    {
        title: "samsung s20+",
        price: 2000000,
        id: 3,
        marca: "samsung"
    },
    {
        title: "moto g9",
        price: 10000,
        id: 4,
        marca: "motorola"
    },
    {
        title: "moto g10",
        price: 19000,
        id: 5,
        marca: "motorola"
    }
]

// aparezca por consola todos los nombres de los celulares

/* Metodo viejo
for(const producto of productos){
    console.log (producto.title)
}
*/
//callback es una funcion pasada por parametro


//como se usa hoy

//forEach recorre todo el array
productos.forEach((producto) => console.log ("el celula es: "+producto.title)) 

//filter para filtrar segun criterio

const resultados = productos.filter((producto) =>  producto.marca == "motorola" && producto.price < 15000 )

if (resultados.length < 1){
    console.log ("No hay resultados de tu busqueda")
}else {
    console.log(resultados)
}

//find


