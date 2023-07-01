//ejecutar con comando: NODE index.js

const express = require('express');

const app = express(); 

app.get('/productos', (req, res) => {

    const productos = [
        {id:1, nombre:'Mouse', precio: 15600},
        {id:2, nombre:'Teclado', precio: 35600},
        {id:3, nombre:'Monitor', precio: 115600}
    ];
    res.json(productos);
});

app.get('/clientes', (req, res) => {

    const productos = [
        {id:10, nombre:'Jorge', apellido: 'Tordos'},
        {id:14, nombre:'carlitos', apellido: 'Guirdos'}
    ];
    res.json(productos);
});

app.post('/productos', (req, res) => {
    res.json({message: 'El producto se agrego correctamente'});
});

app.put('/productos/:id', (req, res) => {
    res.json({message: 'El producto se modifico correctamente'});
});

app.delete('/productos', (req, res) => {
    res.json({message: 'El producto se elimino  correctamente'});
});

app.listen(8000);  //inicia el server para empezar a escuchar peticiones

