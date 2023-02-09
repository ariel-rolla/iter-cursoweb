
const contenedorHTML = document.getElementById("contenedor")

const productos = [
    {
        nombre: "moto g8",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint sapiente quidem dolor veritatis. Incidunt, veniam quam. Laborum reprehenderit eos tenetur sed nemo dolores, voluptatibus atque. Eaque maxime temporibus facilis!",
        precio: 3000
    },
    {
        nombre: "Iphone 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint sapiente quidem dolor veritatis. Incidunt, veniam quam. Laborum reprehenderit eos tenetur sed nemo dolores, voluptatibus atque. Eaque maxime temporibus facilis!",
        precio: 30000
    },
    {
        nombre: "Samsung S20",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint sapiente quidem dolor veritatis. Incidunt, veniam quam. Laborum reprehenderit eos tenetur sed nemo dolores, voluptatibus atque. Eaque maxime temporibus facilis!",
        precio: 3000
    },
    {
        nombre: "Samsung S21",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint sapiente quidem dolor veritatis. Incidunt, veniam quam. Laborum reprehenderit eos tenetur sed nemo dolores, voluptatibus atque. Eaque maxime temporibus facilis!",
        precio: 3000
    },
    {
        nombre: "Samsung S22",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sint sapiente quidem dolor veritatis. Incidunt, veniam quam. Laborum reprehenderit eos tenetur sed nemo dolores, voluptatibus atque. Eaque maxime temporibus facilis!",
        precio: 3000
    }

]

//filtro
const productosCaros = productos.filter(producto => producto.precio >=3000)

//forEach muestro por cada uno
productosCaros.forEach(producto => {
    contenedorHTML.innerHTML +=`
    <div class ="carta" class ="carta">
        <h2>${producto.nombre}</h2>
        <p>${producto.description}</p>
        <p>Precio $${producto.precio}</p>
        <button>Comprar</button>
    </div>
    `

})