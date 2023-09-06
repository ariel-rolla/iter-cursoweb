// 1-   npm init -y   (Para inciar proyecto vacio)
// 2-   npm i express  (Instalar express)
// 3-   npm install mysql2  (para mysql)
// 4-   npm install cors (para errores de CORS)
// 5-   node index.js  (para iniciar el backend)

const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors()); //middleware - Abierto para escuchar cualquier solicitud - cors({origin:"laweb.com:5500sr"}) para restringir

app.use(express.json()); //Habilito la lectura de JSON que venga en el body

const connection = mysql.createConnection({
    host: "yqt.h.filess.io",
    user: "testbd2023_takereason",
    password: "2fc76907c9e1267fbb63e71ae90e76bd136781cc",
    database: "testbd2023_takereason",
    port: 3305
    //port: 3306 - Default
});

connection.connect( (error) => {
    if(error){
        console.log("Error al conectarse a la base de datos "+error);
    } else {
        console.log("Conectado a la Base de datos");
    }
});



app.get('/clientes', (request, response)=>{

    const sql = `SELECT clientes.id, clientes.nombre, apellido, calle, altura, id_provincia, provincias.nombre AS provincia
                FROM clientes, provincias
                WHERE clientes.id_provincia = provincias.id`;
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al obtener el listado de clientes "+error);
        }else{
            response.json(result);
        }
    });

});

//Info de un solo cliente
app.get('/clientes/:id', (req, res)=> {
    const idCliente = req.params.id;

    const sql = `SELECT clientes.id, clientes.nombre, apellido, calle, altura, id_provincia, provincias.nombre AS provincia
                FROM clientes, provincias
                WHERE clientes.id_provincia = provincias.id
                    AND clientes.id= ${idCliente}`;

    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al obtener los datos del cliente "+error);
        } else {
            res.json(result[0]);
        }
    });
});

app.post("/clientes", (req, res) => {
    const {nombre, apellido, calle, altura, provincia } = req.body;

    const sql = `INSERT INTO clientes(nombre, apellido, calle, altura, id_provincia)
                VALUES ("${nombre}","${apellido}","${calle}",${altura},${provincia})`;
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al agregar al cliente")
        }else{
            res.json({message: "El cliente se ha agregado correctamente"});
        }
    });
}); 

app.put("/clientes", (req, res) => {
    const sql = `UPDATE clientes
                SET calle="calle de jorge"
                WHERE id=1`;
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al modificar al cliente")
        }else{
            res.json({message: "El cliente se ha modificado correctamente"});
        }
    });
});

app.delete("/clientes/:id", (req, res) => {

    const id = req.params.id;

    const sql = `DELETE FROM clientes
                WHERE id=${id}`;
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al eliminar al cliente")
        }else{
            res.json({message: "El cliente se ha eliminado correctamente"});
        }
    });
});

app.get('/productos', (request, response)=>{

    const sql = "SELECT * FROM productos";
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al obtener el listado de productos")
        }else{
            response.json(result);
        }
    });

});


app.listen(8000);