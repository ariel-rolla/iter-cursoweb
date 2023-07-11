// 1-   npm init -y
// 2-   npm i express
// 3-   npm install mysql2  (para mysql)
// 4-   npm install cors (para errores de CORS)

const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors()); //middleware - Abierto para escuchar cualquier solicitud - cors({origin:"laweb.com:5500"}) para restringir

const connection = mysql.createConnection({
    host: "www.db4free.net",
    user: "testbd",
    password: "Pokerface2+",
    database: "testbd2023",
    //port: 3306
});

connection.connect( (error) => {
    if(error){
        console.log("Error al conectarse a la base de datos");
    } else {
        console.log("Conectado a la Base de datos");
    }
});


app.get('/clientes', (request, response)=>{

    const sql = "SELECT * FROM clientes";
    connection.query(sql, (error, result)=>{
        if(error){
            console.log("Error al obtener el listado de clientes")
        }else{
            response.json(result);
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