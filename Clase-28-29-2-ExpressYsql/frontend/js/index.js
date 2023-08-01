const modalEditorClientes = new bootstrap.Modal("#modal-editor-clientes", {});
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
    content.innerHTML = html;     //innerHTML Reemplaza lo que ya tuviera
    

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

const eliminarCliente = (id) => {
    const url = `http://127.0.0.1:8000/clientes/${id}`;
    fetch(url, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then((data) => {
        cargarClientes();
        console.log(data);
    });
}

const mostrarClientes = (clientes) => {

    let html = `
                <button id="btn-nuevo-cliente" class="btn btn-primary">Nuevo</button>
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
    
    clientes.forEach(({id, nombre, apellido, calle, altura, provincia}) => {

        html += `<tr>
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${calle}</td>
                    <td>${altura}</td>
                    <td>${provincia}</td>
                    <td>
                        <button class="btn-modificar-cliente btn btn-success">Modificar</button>
                        <button data-id=${id} class="btn-eliminar-cliente btn btn-danger">Eliminar</button>
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

        const id = boton.getAttribute("data-id")  // getAttribute para atributos personalizados

        boton.addEventListener("click", () => eliminarCliente(id) );
    };

    const btnNuevoCliente = document.getElementById("btn-nuevo-cliente");
    btnNuevoCliente.addEventListener("click", mostrarModalCliente);
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
        body: JSON.stringify(data), //stringify convierte el objeto en string, contrario es JSON.parse(data)
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then((data) =>{ 
        console.log(data);

        Swal.fire({             // sweet alert
            text:"El Cliente se agrego correctamente",
            icon: "success"
        }) 

        cargarClientes();

        modalEditorClientes.hide(); // oculta modal
    });


}

const mostrarModalCliente = () => {
    modalEditorClientes.show();
}

const btGuardarCliente = document.getElementById("btn-guardar-cliente");
btGuardarCliente.addEventListener("click", guardarCliente);



