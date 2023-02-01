
// array de objetos
const productos = [
    {
        title: "moto g8",
        price: 9000,
        id: 1
    },
    {
        title: "IPHONE 10",
        price: 3000,
        id: 2
    },
    {
        title: "samsung s20+",
        price: 2000000,
        id: 3
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
/* productos.forEach((producto) => console.log (producto.title)) */

