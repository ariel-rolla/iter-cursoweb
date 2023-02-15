const productos = [
    {
        id: 1,
        nombre: "Alfajor Jorgito 24un",
        precio: 3220,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_734433-MLA45465512643_042021-F.webp",
        descripcion: "Alfajor Relleno de dulce de leche Sabor Chocolate - 24 Unidades"
    },
    {
        id: 2,
        nombre: "Alfajores Cachafaz De Chocolate 12un",
        precio: 2830,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_939129-MLA49753116900_042022-F.webp",
        descripcion: "Alfajor cachafaz relleno con dulce de leche y bañado con chocolate negro - 12 Unidades"
    },
    {
        id: 3,
        nombre: "Alfajor Capitán Del Espacio 2un",
        precio: 2900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_605635-MLA53378442261_012023-F.webp",
        descripcion: "Alfajor Capitan del Espacio sabor chocolate - 2 Unidades"
    },
    {
        id: 4,
        nombre: "Alfajores Guaymallén Triple Blanco 24un",
        precio: 1763,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_734433-MLA45465512643_042021-F.webp",
        descripcion: "Alfajores Guaymallén Triple Blanco - 24 unidades"
    },
    {
        id: 5,
        nombre: "Alfajores Arroz Vauquita 24un",
        precio: 1757,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_730480-MLA47848601443_102021-F.webp",
        descripcion: "Alfajores Arroz Vauquita Choco Blanco Con Dulce De Leche - 24 Unidades"
    },    
]


//Consumir API
//Asincrono - Sigue el resto del codigo hasta que termine la consulta a la api
//fetch devuelve una promesa, 

const URL_API = "https://swapi.dev/api/"

fetch(URL_API)
.then(response => console.log(response)) //RESUELTO: al obtener resultado satisfactorio
.catch(error => )  //Error al conectar