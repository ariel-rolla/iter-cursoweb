const linkClientes = document.getElementById("link-clientes");
const linkProductos = document.getElementById("link-productos");

const cargarClientes = () => {
    const url = "http://127.0.0.1:8000/clientes";

    fetch(url)
        .then((response) => response.json())
        .then(mostrarClientes);
}

const cargarProductos = () => {
    const url = "http://127.0.0.1:8000/productos";

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

const modificarCliente = () => {
    const url = "http://127.0.0.1:8000/clientes";
    fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then((data) => console.log(data));
}

const eliminarCliente = () => {
    const url = "http://127.0.0.1:8000/clientes";
    fetch(url, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then((data) => console.log(data));
}

const mostrarClientes = (clientes) => {

    let html = `
                <button id="btn-nuevo-cliente" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-editor-clientes">Nuevo</button>
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
    
    clientes.forEach(({nombre, apellido, calle, altura, id_provincia}) => {

        html += `<tr>
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${calle}</td>
                    <td>${altura}</td>
                    <td>${id_provincia}</td>
                    <td>
                        <button class="btn-modificar-cliente btn btn-success">Modificar</button>
                        <button class="btn-eliminar-cliente btn btn-danger">Eliminar</button>
                    </td>
                </tr>           
        `
    });

    html += ` </tbdody>
             </table> `

    const content = document.getElementById("content");
    content.innerHTML = html;

   /* const btnNuevoCliente = document.getElementById("btn-nuevo-cliente");
    btnNuevoCliente.addEventListener("click", agregarCliente); */

    const btnModificarCliente = document.getElementsByClassName("btn-modificar-cliente");
    for (boton of btnModificarCliente){
        boton.addEventListener("click", modificarCliente);
    };

    const btnEliminarCliente = document.getElementsByClassName("btn-eliminar-cliente");
    for (boton of btnEliminarCliente){
        boton.addEventListener("click", eliminarCliente);
    };
}

linkClientes.addEventListener("click", cargarClientes);
linkProductos.addEventListener("click", cargarProductos);

const guardarCliente = () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const calle = document.getElementById("calle").value;
    const altura = document.getElementById("altura").value;
    const provincia = document.getElementById("provincia").value;

    const data = {nombre, apellido, calle, altura, provincia} ; // solo si la variable es igual, ejemplo nombre: nombre

    const url = "http://127.0.0.1:8000/clientes";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then((data) => console.log(data));
}

const btGuardarCliente = document.getElementById("btn-guardar-cliente");
btGuardarCliente.addEventListener("click", guardarCliente);