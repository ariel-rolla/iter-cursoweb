// 1-   npm init -y
// 2-   npm i express
// 3-   npm install mysql2  (para mysql)
// 4-   npm install cors (para errores de CORS)

const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors()); //middleware - Abierto para escuchar cualquier solicitud - cors({origin:"laweb.com:5500sr"}) para restringir

app.use(express.json()); //Habilito la lectura de JSON que venga en el body

const connection = mysql.createConnection({
    host: "www.db4free.net",
    user: "testbd",
    password: "Pokerface2+",
    database: "testbd2023",
    //port: 3306 - Default
});

connection.connect( (error) => {
    if(error){
        console.log("Error al conectarse a la base de datos");
    } else {
        console.log("Conectado a la Base de datos");
    }
});


app.get('/clientes', (request, response)=>{

    const sql = `SELECT clientes.id, clientes.nombre, apellido, calle, altura, id_provincia, provincias.nombre AS pronvincia
                FROM clientes, provincias
                WHERE clientes.id_provincia = provincia.id`;
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al obtener el listado de clientes")
        }else{
            response.json(result);
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

app.delete("/clientes", (req, res) => {
    const sql = `DELETE FROM clientes
                WHERE id=1`;
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