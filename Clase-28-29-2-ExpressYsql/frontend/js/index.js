const linkClientes = document.getElementById("link-clientes");
const linkProductos = document.getElementById("link-productos");

const cargarClientes = () => {
    const url = "http://localhost:8000/clientes";

    fetch(url)
        .then((response) => response.json())
        .then(mostrarClientes);
}

const cargarProductos = () => {
    const url = "http://localhost:8000/productos";

    fetch(url)
        .then((response) => response.json())
        .then(mostrarProductos);
}

const mostrarProductos = (productos) => {

    let html = `<table class="table">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbdody>`

    productos.forEach( (producto) => {
        const { nombre, precio, stock} = producto;

        html += `<tr>
                    <td>${nombre}</td>
                    <td>${precio}</td>
                    <td>${stock}</td>
                </tr>           
        `
    });

    html += ` </tbdody>
             </table> `

    const content = document.getElementById("content");
    content.innerHTML = html;

}


const mostrarClientes = (clientes) => {

    let html = `
                <button classs="btn btn-primary">Nuevo</button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Calle</th>
                            <th>Altura</th>
                            <th>Provincia</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbdody>`
    
    clientes.forEach( (nombre, apellido, calle, altura, id_provincia) => {

        html += `<tr>
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${calle}</td>
                    <td>${altura}</td>
                    <td>${id_provincia}</td>
                    <td>
                        <button class="btn btn-success">Modificar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>           
        `
    });

    html += ` </tbdody>
             </table> `

    const content = document.getElementById("content");
    content.innerHTML = html;
}

linkClientes.addEventListener("click", cargarClientes);
linkProductos.addEventListener("click", cargarProductos);